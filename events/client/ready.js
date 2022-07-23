module.exports = (client) => {
    console.log(`EL Bot : ${client.user.username} esta en Linea`)
    client.user.setStatus('online');
    client.user.setActivity('Lo que escribes', {type:"WATCHING"})
};