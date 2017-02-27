///////////////////////////////////////////////////
//                                               //
// Initializar allar breytur, föll og hreyfingar //
//                                               //
///////////////////////////////////////////////////

var canvas;
var gl;

var program1;
var program2;

var texture;
var image;

var numSquareVertices = 6;
var numCubeVertices  = 36;

// Hnit fernings

var squareVertices = [
	vec3( -0.5,  0.5, -0.5 ),
	vec3( -0.5, -0.5, -0.5 ),
	vec3(  0.5, -0.5, -0.5 ),
	vec3( -0.5,  0.5, -0.5 ),
	vec3(  0.5, -0.5, -0.5 ),
	vec3(  0.5,  0.5, -0.5 )
];

// Hnit kassa

var cubeVertices = [
    // front side:
    vec3( -0.5,  0.5,  0.5 ), vec3( -0.5, -0.5,  0.5 ), vec3(  0.5, -0.5,  0.5 ),
    vec3(  0.5, -0.5,  0.5 ), vec3(  0.5,  0.5,  0.5 ), vec3( -0.5,  0.5,  0.5 ),
    // right side:
    vec3(  0.5,  0.5,  0.5 ), vec3(  0.5, -0.5,  0.5 ), vec3(  0.5, -0.5, -0.5 ),
    vec3(  0.5, -0.5, -0.5 ), vec3(  0.5,  0.5, -0.5 ), vec3(  0.5,  0.5,  0.5 ),
    // bottom side:
    vec3(  0.5, -0.5,  0.5 ), vec3( -0.5, -0.5,  0.5 ), vec3( -0.5, -0.5, -0.5 ),
    vec3( -0.5, -0.5, -0.5 ), vec3(  0.5, -0.5, -0.5 ), vec3(  0.5, -0.5,  0.5 ),
    // top side:
    vec3(  0.5,  0.5, -0.5 ), vec3( -0.5,  0.5, -0.5 ), vec3( -0.5,  0.5,  0.5 ),
    vec3( -0.5,  0.5,  0.5 ), vec3(  0.5,  0.5,  0.5 ), vec3(  0.5,  0.5, -0.5 ),
    // back side:
    vec3( -0.5, -0.5, -0.5 ), vec3( -0.5,  0.5, -0.5 ), vec3(  0.5,  0.5, -0.5 ),
    vec3(  0.5,  0.5, -0.5 ), vec3(  0.5, -0.5, -0.5 ), vec3( -0.5, -0.5, -0.5 ),
    // left side:
    vec3( -0.5,  0.5, -0.5 ), vec3( -0.5, -0.5, -0.5 ), vec3( -0.5, -0.5,  0.5 ),
    vec3( -0.5, -0.5,  0.5 ), vec3( -0.5,  0.5,  0.5 ), vec3( -0.5,  0.5, -0.5 )
];

var texCoords = [
    vec2( 0.0, 0.0 ),
    vec2( 1.0, 0.0 ),
    vec2( 1.0, 1.0 ),
    vec2( 1.0, 1.0 ),
    vec2( 0.0, 1.0 ),
    vec2( 0.0, 0.0 )
];

// Stöðugildi fyrir frosk ( og myndavél )

var frogXPos = 0.0;
var frogYPos = 0.0;

// Stöðugildi fyrir bíla

var carXPos1a = xPosRandomizer();
var carXPos1b = carXPos1a - 7.5;
var carXPos2 = xPosRandomizer();
var carXPos3a = xPosRandomizer();
var carXPos3b = carXPos3a - 7.5;

// Stöðugildi fyrir viðarbúta

var logXPos1a = xPosRandomizer();
var logXPos1b = logXPos1a - 6.5;
var logXPos2a = xPosRandomizer();
var logXPos2b = logXPos2a - 6.5;
var logXPos3a = xPosRandomizer();
var logXPos3b = logXPos3a - 6.5;

// Stöðugildi fyrir skjaldbökur

var turtleXPos1 = xPosRandomizer();
var turtleXPos2 = xPosRandomizer();

// Hraðagildi fyrir bíla

var carSpeed1 = speedRandomizer();
var carSpeed2 = speedRandomizer();
var carSpeed3 = speedRandomizer();

// Hraðagildi fyrir viðarbúta

var logSpeed1 = speedRandomizer();
var logSpeed2 = speedRandomizer();
var logSpeed3 = speedRandomizer();


// Hraðagildi fyrir skjaldbökur

var turtleSpeed1 = speedRandomizer();
var turtleSpeed2 = speedRandomizer();

// Dýptargildi fyrir skjaldbökur

var turtleDive1 = 1.0;
var turtleDive2 = 1.0;

var turtleDiveTimer1 = 0.0;
var turtleDiveTimer2 = 0.0;

// Tímagildi fyrir flugu

var flyTimer = 0.0;

// Staða flugu

var flyPos;
var flySetting;

// Gildi fyrir leik

var points = 0;
var lives = 3;
var freeze = 0;

// Litir

var RED = vec4( 1.0, 0.0, 0.0, 1.0 );
var GREEN = vec4( 0.0, 1.0, 0.0, 1.0 );
var DARKGREEN = vec4( 0.0, 0.5, 0.0, 1.0 ); 
var BLUE = vec4( 0.0, 0.0, 1.0, 1.0 );
var LIGHTBLUE = vec4( 0.5, 0.5, 1.0, 1.0 );
var YELLOW = vec4( 1.0, 1.0, 0.0, 1.0 );
var PURPLE = vec4( 0.5, 0.0, 0.5, 1.0 );
var BROWN = vec4( 0.64, 0.16, 0.16, 1.0 );
var GRAY = vec4( 0.4, 0.4, 0.4, 1.0 );
var BLACK = vec4( 0.0, 0.0, 0.0, 1.0 );
var WHITE = vec4( 1.0, 1.0, 1.0, 1.0 );

// BackGround Color

var BGC = vec4( 0.9, 1.0, 1.0, 1.0 );

var proLoc1;
var mvLoc1;
var posLoc1;

var proLoc2;
var mvLoc2;
var posLoc2;

var texLoc;
var colorLoc;

var cubeBuffer;
var squareBuffer;
var textureBuffer;
var vBuffer;
var vPosition;

function configureTexture( image, prog ) {
    texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image );
    gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    
    gl.useProgram(prog);
    gl.uniform1i(gl.getUniformLocation(prog, "texture"), 0);
}

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }


    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.9, 1.0, 1.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);
	
	program1 = initShaders( gl, "vertex-shader", "fragment-shader" );
    program2 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
	
	cubeBuffer = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(cubeVertices), gl.STATIC_DRAW );
	
	squareBuffer = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(squareVertices), gl.STATIC_DRAW );
	
	textureBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, textureBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoords), gl.STATIC_DRAW );

    texLoc = gl.getAttribLocation( program2, "vTexCoord" );
    gl.vertexAttribPointer( texLoc, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( texLoc );
	
	posLoc1 = gl.getAttribLocation( program1, "vPosition" );
    gl.enableVertexAttribArray( posLoc1 );
	
	posLoc2 = gl.getAttribLocation( program2, "vPosition" );
    gl.enableVertexAttribArray( posLoc2 );
	
    proLoc1 = gl.getUniformLocation( program1, "projection" );
    mvLoc1 = gl.getUniformLocation( program1, "modelview" );

    proLoc2 = gl.getUniformLocation( program2, "projection" );
    mvLoc2 = gl.getUniformLocation( program2, "modelview" );
	
	colorLoc = gl.getUniformLocation( program1, "fColor" );
	
	var image = document.getElementById("grassTexture");
    configureTexture( image, program2 );
	
    proj = perspective( 50.0, 1.0, 1.0, 500.0 );
	
	gl.useProgram(program1);
    gl.uniformMatrix4fv(proLoc1, false, flatten(proj));
    
    gl.useProgram(program2);
    gl.uniformMatrix4fv(proLoc2, false, flatten(proj));
    
    window.addEventListener("keydown", function(e){
        switch( e.keyCode ) 
		{
			case 37:    // vinstri ör
				if(!freeze)
				{
					moveLeft();
				}
				break;
			case 38:	// upp ör
				if(!freeze)
				{
					moveUp();
				}
				break;
			case 39:    // hægri ör
				if(!freeze)
				{
					moveRight();
				}
				break;
			case 40:	// niður ör
				if(!freeze)
				{
					moveDown();
				}
				break;
        }
     } );  

    render();
}
//
//--- Hver hlutur byrjar á random stað ------------------------------------------------------------------------------------------------------------------------------------------------
//
function xPosRandomizer()
{
	return ( Math.random() * 13.0 ) - 6.5;
}
//
//--- Hver hlutur fær random hraða ----------------------------------------------------------------------------------------------------------------------------------------------------
//
function speedRandomizer()
{
	return ( Math.random() * 0.05 ) + 0.04;
}
//
//--- Fluga færir sig reglulega -------------------------------------------------------------------------------------------------------------------------------------------------------
//
function configureFly()
{
	if( 200 < flyTimer )
	{
		flySetting = Math.floor( Math.random() * 7 );
		flyTimer = 0.0;
	}
	flyTimer += 1;
}
//
//--- Froskur nær flugu ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function score()
{
	points += 1;
	document.getElementById("Scoring").innerHTML = "Score: " + points;
	
	frogXPos = 0.0;
	frogYPos = 0.0;
}
//
//--- Froskur lendir á bíl eða út í vatn ----------------------------------------------------------------------------------------------------------------------------------------------
//
function death()
{
	lives -= 1;
	document.getElementById("Lives").innerHTML = "Lives: " + lives;
	
	frogXPos = 0.0;
	frogYPos = 0.0;
	
	if( lives == 0 )
	{
		gameOver();
	}
}
//
//--- Öll þrjú líf eru búin -----------------------------------------------------------------------------------------------------------------------------------------------------------
//
function gameOver()
{
	freeze = 1.0;
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var proj = perspective( 90.0, 1.0, 0.2, 100.0 );
    gl.uniformMatrix4fv( proLoc1, false, flatten(proj) );
	gl.uniformMatrix4fv( proLoc2, false, flatten(proj) );
	
	// at & eye gildi myndavélar hreyfast nákvæmlega eins og froskurinn
	
	var mv = lookAt( vec3(0.0+frogXPos, -2.0+frogYPos, 2.0), vec3(0.0+frogXPos, 0.0+frogYPos, 0.0), vec3(0.0, 1.0, 0.0) );
		
    gl.useProgram(program1);	
		
	// Reglulega stilla stöðu flugu	
		
	configureFly();	
		
	// Jaðar
	
	drawBorders(mv);
		
	// Umhverfi
	
	drawScenery(mv);
	
	// Umhverfi með render í stað draw ( Virkar en er mjög slow )
	
	//renderScenery(mv);
	
	// Froskur
    	
	drawFrog(mv);
	
	// Aðrir hlutir
	
	drawEntities(mv);
	
    requestAnimFrame( render );
}