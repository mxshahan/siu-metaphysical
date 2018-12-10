import Nexmo from 'nexmo';
const nexmo = new Nexmo({
    apiKey: 'd314265e',
    apiSecret: 'KUvbHyq7pwvAxBUC'
}, { debug: true })

export const smsController = async (req, res) => {
    const from = 'SIU_Metaphysical';
    const accType = req.body.accType;
    const to = req.body.to; // Reciever Phone Number
    const text = 'Your Account Approved for - ' + accType + '\n' +req.body.text;
    console.log(text);
    try {
        await nexmo.message.sendSms(from, to, text);
        res.status(200).json({ 
            msg: 'Message Send Successfully',
            status: true
        })
    } catch(e) {
        res.status(403).json({ 
            msg: 'Message cannot send', 
            status: false
        })
    }
}