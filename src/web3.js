function getBoxes() {
    const Web3 = require('web3')

    const contractInterface = JSON.parse('[{"constant":true,"inputs":[],"name":"getBoxes","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"box","type":"address"}],"name":"getLastState","outputs":[{"name":"ok","type":"bool"},{"name":"opened","type":"bool"},{"name":"location","type":"string"},{"name":"error","type":"string"},{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"box","type":"address"}],"name":"ifCanBeOpened","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"box","type":"address"},{"name":"receiver","type":"address"}],"name":"setReceiver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"box","type":"address"},{"name":"secret","type":"string"}],"name":"open","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"box","type":"address"}],"name":"getStatesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ok","type":"bool"},{"name":"opened","type":"bool"},{"name":"location","type":"string"},{"name":"error","type":"string"}],"name":"state","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"box","type":"address"},{"name":"secret","type":"string"}],"name":"setSecret","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"box","type":"address"},{"name":"index","type":"uint256"}],"name":"getState","outputs":[{"name":"ok","type":"bool"},{"name":"opened","type":"bool"},{"name":"location","type":"string"},{"name":"error","type":"string"},{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"box","type":"address"}],"name":"addBox","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"box","type":"address"}],"name":"close","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');

    // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8457");
    const web3 = new Web3(
        new Web3.providers.HttpProvider('https://rinkeby.infura.io/')
    );
    const Contract = new web3.eth.Contract(contractInterface);
    // const contractInstance = Contract.at('0xbc4718d51b040351bd52214f60395f4e002ed4f6');

    // console.log('contract:', contractInstance);
    Contract.methods.getBoxes().send().then(boxes => {
        console.log(boxes)
    })
}

exports.getBoxes = () => {
    getBoxes();
}
