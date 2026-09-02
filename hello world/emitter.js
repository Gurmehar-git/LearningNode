const eventEmitter = require('events');
console.log(eventEmitter);
const eventEmitterObject= new eventEmitter();


//making a listener
eventEmitterObject.on('order placed', () => {
    console.log('Food has been ordered send sms');
});

eventEmitterObject.on('order placed', () => {
    console.log('Food has been ordered send email');
});


//this is order placed happening, and upar wale listener notifications hai jo jayenge jab order placed emit hoga.
eventEmitterObject.emit('order placed');
