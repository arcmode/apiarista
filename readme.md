apiarista
=========

*See also [apiarista-template](http://github.com/drojas/apiarista-template/).*

`apiarista` is a CLI tool to use along with [Node.js](http://nodejs.org/) and [Express](http://expressjs.com/).

It purpose is to take an [app template](http://github.com/drojas/apiarista-template/) and use it as a source for API structure and API resources generation.

###Installation

	$ npm install -g drojas/apiarista

###Usage

`apiarista` asumes an [Express](http://expressjs.com/) app

	$ npm install -g express
	$ express /tmp/foo && cd /tmp/foo
	$ npm install

Now you can use `apiarista` to plug a generic API to your project
	
	$ apiarista -h

	 Usage: apiarista [options]

	 Options:

		 -h, --help                   output usage information
		 -V, --version                output the version number
		 -i, install                  install base api
		 -r, resource [ResourceName]  generate resource
		 -o, --owned                  set an owner field for the resource
		 -t, --timestamp              add timestamp field to resource
		 -f, --force                  force resource creation
		 -d, --debug                  debug mode

	 Examples:

		 $ apiarista install
		 $ apiarista resource blog name:String
		 $ apiarista resource Blog "name : { type: String }"
		 $ apiarista resource Has "blog : { type: ObjectId, ref: 'Blog' }" --owned --timestamp

Let

	$ apiarista resource Poll "title: String" "options: []" -o -t

The flags `-o` and `-t` will add a owner (`ref: 'User'`) and a timestamp (`Date.now) to the resource Schema.

So, the following generates the same Schema:

	$ apiarista -r Poll "title: String" "options: []" "user: { type: Schema.ObjectId, ref: 'User' }"
	"date: { type: Date, default: Date.now }"

**IMPORTANT** `apiarista` also uses the `-o` flag to add ownership verification middleware to the PUT and DELETE operations.

I recommend to use the `-o` and `-t` flags when a resource need to be owned and timestamped.

### Dependencies

[apiarista-template](http://github.com/drojas/apiarista-template/) depends on [Express](http://expressjs.com/) `v3.1.0`, [Mongoose](http://mongoosejs.com/) `v3.5.7` and [Express](http://github.com/flesch/token.js/) `v0.0.1.

`apiarista` will add that dependencies to your `package.json` if not present so after the generation process you probably should do `npm install`.

------------

<pre>
     ^^      .-=-=-=-.  ^^
 ^^        (`-=-=-=-=-`)         ^^
         (`-=-=-=-=-=-=-`)  ^^         ^^
   ^^   (`-=-=-=-=-=-=-=-`)   ^^                            ^^
       ( `-=-=-=-(@)-=-=-` )      ^^
       (`-=-=-=-=-=-=-=-=-`)  ^^
       (`-=-=-=-=-=-=-=-=-`)              ^^
       (`-=-=-=-=-=-=-=-=-`)                      ^^
       (`-=-=-=-=-=-=-=-=-`)  ^^
        (`-=-=-=-=-=-=-=-`)          ^^
         (`-=-=-=-=-=-=-`)  ^^                 ^^
     jgs   (`-=-=-=-=-`)
            `-=-=-=-=-`
</pre>