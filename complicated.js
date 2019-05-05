module.exports = function(RED) {
    function updateComplicatedNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.api = config.api;
        this.complication = config.complication

        node.on('input', function(msg) {
            msg.url = "https://customcomplication.mikelyons.org/complicated/set/" + config.api + "/" + config.complication + "?value=" + encodeURI(msg.payload)
            msg.payload = ""
            node.send(msg);
        });
    }
    RED.nodes.registerType("complicated",updateComplicatedNode);
}