# node-red-contrib-complicated
Node Red Node for sending messages to Apple Watch Complicated app of (https://mikelyons.org/complicated/) 

I'm not affiliated with the Complicated App itself. This node is to provide an interface from Node-Red to the API of the Complicated App.

Read the manual of the Complicated app. Get the API key, you have to enter this in the node itself.

As stated in the manual of the Complicated app. Keep your request below 15 calls per hour otherwise you might become rate limited.

Connect the output of the Complicated node to a http-request node. No need to configure the http-request node itself.



