import Nexmo from 'nexmo';
const nexmo = new Nexmo({
    apiKey: '4789f6a6',
    apiSecret: 'ZkVzu2cPz480f9qj'
}, { debug: true })

export const smsUser = async (req, res) => {
    // console.log(req.body)
    const from = '8801752294542';
    const accType = req.body.accType;
    const to = req.body.to; // Reciever Phone Number
    const text = req.body.text;
    // console.log(text)
    try {
        nexmo.message.sendSms(from, to, text, {type: 'unicode'}, (err, resData) => {
            if (err) {
                console.log(err);
            } else {
                console.dir(resData);
                res.status(201).json({ 
                    msg: 'Message Send Successfully',
                    status: true,
                    data: resData
                })
            }
        });
    } catch(e) {
        res.status(403).json({ 
            msg: 'Message cannot send', 
            status: false
        })
    }
}



export const geoUser = async (req, res) => {
    res.render('geo', {
        status: true
    })
}
