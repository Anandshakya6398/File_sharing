const jwt = require('jsonwebtoken');


function checkAuth(req, res, next) {
    const authToken = req.cookies.authToken;
    const refreshToken = req.cookies.refreshToken;
    console.log("Check Auth Token MIDDLEWARE CALLED", authToken, refreshToken)


    if (!authToken || !refreshToken) {
        return res.status(401).json({ message: 'Authentication failed: No authToken or refreshToken provided', ok: false });
    }

    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (refreshErr, refreshDecoded) => {
                if (refreshErr) {
                    // Both tokens are invalid, send an error message and prompt for login
                    return res.status(401).json({ message: 'Authentication failed: Both tokens are invalid', ok: false });
                }
                else {
                    const newAuthToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_SECRET, { expiresIn: '10m' });
                    const newRefreshToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: '50m' });

                    // Set the new tokens as cookies in the response
                    res.cookie('authToken', newAuthToken,  { 
                        sameSite: 'none',
                        httpOnly: true,
                        secure: true
                     });
                    res.cookie('refreshToken', newRefreshToken,  { 
                        sameSite: 'none',
                        httpOnly: true,
                        secure: true
                     });     
                    req.userId = refreshDecoded.userId;
                    req.ok = true;
                    req.message = "Authentication successful";
                    next();
                }
            })
        }
        else {
            req.userId = decoded.userId;
            req.ok = true;
            req.message = "Authentication successful";
            next();

        }
    })
}

module.exports = checkAuth;