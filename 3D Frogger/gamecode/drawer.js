///////////////////////////
//                       //
// Föll sem teikna allt  //
//                       //
///////////////////////////

//
//--- Uppröðun afmarka ------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawBorders(mv)
{
	var mv1 = mv;
	
	mv = mult( mv, translate( 0.0, -1.5, -0.5 ) );
	mv = mult( mv, scalem( 15.0, 2.0, 0.1 ) );
	
	drawBorder(mv);
	
	mv = mult( mv, translate( 0.0, 6.5, 0.0 ) );
	mv = mult( mv, scalem( 1.0, 1.0, 8.0 ) );
	
	drawBorder(mv);
	
	mv1 = mult( mv1, translate( -7.5, 6.0, -0.5 ) );
	mv1 = mult( mv1, scalem( 2.0, 15.0, 1.8 ) );
	
	drawBorder(mv1);
	
	mv1 = mult( mv1, translate( 7.5, 0.0, 0.0 ) );
	
	drawBorder(mv1);
}

function drawBorder(mv)
{
	gl.uniform4fv(colorLoc, BGC );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );

	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}


//
//--- Uppröðun umhverfis --------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawScenery(mv)
{
	var mv1 = mv;
	var mv2 = mv;
	
	mv = mult( mv, scalem( 13.0, 1.0, 1.0 ) );
	
	drawGrass(mv);
	
	for( var i = 0; i < 3; i++ )
	{
		mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
		drawRoad(mv);
		if( 0 < i )
		{
			drawRoadLines(mv1);
		}
	}
		
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawGrass(mv);
	
	for( var i = 0; i < 5; i++ )
	{
		mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
		drawWater(mv);
	}
		
	mv2 = mult( mv2, translate( 0.0, 10.0, 0.0 ) );
	
	drawFinish(mv2);
}

function renderScenery(mv)
{
	var mv1 = mv;
	var mv2 = mv;
	
	mv = mult( mv, scalem( 13.0, 1.0, 1.0 ) );
	
	renderGrass(mv);
	
	for( var i = 0; i < 3; i++ )
	{
		mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
		renderRoad(mv);
		if( 0 < i )
		{
			drawRoadLines(mv1);
		}
	}
		
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	renderGrass(mv);
	
	for( var i = 0; i < 5; i++ )
	{
		mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
		drawWater(mv);
	}
		
	mv2 = mult( mv2, translate( 0.0, 10.0, 0.0 ) );
	
	drawFinish(mv2);
}
//
//--- Teikning grass ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function renderGrass(mv)
{
	gl.useProgram(program2);
	
	image = document.getElementById("grassTexture");
    configureTexture( image, program2 );

	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc2, 3, gl.FLOAT, false, 0, 0 );
	
	mv = mult( mv, scalem( 1/13, 1.0, 1.0 ) );
	
	mv = mult( mv, translate( -6.0, 0.0, 0.0 ) );
	
	for( var i = 0; i < 13; i++ )
	{
		gl.uniformMatrix4fv(mvLoc2, false, flatten(mv) );
		gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
		
		mv = mult( mv, translate( 1.0, 0.0, 0.0 ) );
	}
	
	gl.useProgram(program1);
}

function drawGrass(mv)
{
	gl.uniform4fv(colorLoc, DARKGREEN );
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
		
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
}
//
//--- Teikning vegar ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function renderRoad(mv)
{
	gl.useProgram(program2);
	
	image = document.getElementById("roadTexture");
    configureTexture( image, program2 );

	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	
	mv = mult( mv, scalem( 1/13, 1.0, 1.0 ) );
	
	mv = mult( mv, translate( -6.0, 0.0, 0.0 ) );
	
	for( var i = 0; i < 13; i++ )
	{
		gl.uniformMatrix4fv(mvLoc2, false, flatten(mv) );
		gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
		
		mv = mult( mv, translate( 1.0, 0.0, 0.0 ) );
	}
	
	gl.useProgram(program1);
}

function drawRoad(mv)
{
	gl.uniform4fv(colorLoc, GRAY );
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
		
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
}
//
//--- Uppröðun veglína ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawRoadLines(mv)
{
	gl.uniform4fv(colorLoc, YELLOW );
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	
	mv = mult( mv, translate( -6.0, 1.5, 0.01 ) );
		
	drawRoadLine(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawRoadLine(mv);
}
//
//--- Teikning veglína ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawRoadLine(mv)
{	
	var mv1 = mv;
	
	for( var i = 0; i < 7; i++ )
	{		
		mv1 = mult( mv, scalem( 0.8, 0.1, 1.0 ) );		

		gl.uniformMatrix4fv( mvLoc1, false, flatten(mv1) );
		gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
		
		mv = mult( mv, translate( 2.0, 0.0, 0.0 ) );
	}
}
//
//--- Teikning vatns ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawWater(mv)
{
	gl.uniform4fv(colorLoc, BLUE );
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
		
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
}
//
//--- Uppröðun endasvæðis -------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawFinish(mv)
{
	mv = mult( mv, translate( -6.0, 0.0, 0.0 ) );
	
	drawFinishSpot(mv);
	
	for( var i = 0; i < 6; i++ )
	{
		mv = mult( mv, translate( 1.0, 0.0, 0.0 ) );
		
		drawDivider(mv);
		
		mv = mult( mv, translate( 1.0, 0.0, 0.0 ) );
		
		drawFinishSpot(mv);
	}
}
//
//--- Teikning endastaða --------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawFinishSpot(mv)
{
	gl.uniform4fv( colorLoc, DARKGREEN );
	gl.bindBuffer( gl.ARRAY_BUFFER, squareBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
		
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numSquareVertices );
}
//
//--- Teikning millistaða -------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawDivider(mv)
{
	gl.uniform4fv( colorLoc, BLACK );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	
	mv = mult( mv, scalem( 1.0, 1.0, 0.5 ) );
	mv = mult( mv, translate( 0.0, 0.0, -0.8 ) );
	
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}
//
//--- Teikning frosks -----------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawFrog(mv)
{
	gl.uniform4fv( colorLoc, YELLOW );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
    gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	
	collider();
	
	var mv1 = mv;
	var mv2 = mv;
	
	mv = mult( mv, translate( frogXPos, frogYPos, -0.45 ) );
	
	mv = mult( mv, scalem( 0.25, 0.3, 0.1 ) );
    
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	gl.uniform4fv( colorLoc, GREEN );
	
	mv = mult( mv, translate( -0.6, 0.3, 0.0 ) );
	mv1 = mult( mv, scalem( 0.2, 0.2, 1.0 ) );
	mv2 = mult( mv1, translate( -0.8, 1.0, 0.0 ) );
	mv2 = mult( mv2, scalem( 1.0, 3.0, 1.0 ) );
	
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv1));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	gl.uniformMatrix4fv(mvLoc1, false, flatten(mv2));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	mv = mult( mv, translate( 1.2, 0.0, 0.0 ) );
	mv1 = mult( mv, scalem( 0.2, 0.2, 1.0 ) );
	mv2 = mult( mv1, translate( 0.8, 1.0, 0.0 ) );
	mv2 = mult( mv2, scalem( 1.0, 3.0, 1.0 ) );

    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv1));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );	
	
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv2));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );

	mv = mult( mv, translate( 0.0, -0.6, 0.0 ) );
	mv1 = mult( mv, scalem( 0.2, 0.2, 1.0) );
	mv2 = mult( mv1, translate( 0.8, -1.0, 0.0 ) );
	mv2 = mult( mv2, scalem( 1.0, 3.0, 1.0 ) );
	
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv1));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv2));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );	
	
	mv = mult( mv, translate( -1.2, 0.0, 0.0 ) );
	mv1 = mult( mv, scalem( 0.2, 0.2, 1.0) );
	mv2 = mult( mv1, translate( -0.8, -1.0, 0.0 ) );
	mv2 = mult( mv2, scalem( 1.0, 3.0, 1.0 ) );

    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv1));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );	
		
    gl.uniformMatrix4fv(mvLoc1, false, flatten(mv2));
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );

	
}
//
//--- Uppröðun annara hluta -----------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawEntities(mv)
{	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawCar1a(mv);
	drawCar1b(mv);

	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawCar2(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );

	drawCar3a(mv);
	drawCar3b(mv);
	
	mv = mult( mv, translate( 0.0, 2.0, 0.0 ) );
	
	drawLog1a(mv);
	drawLog1b(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );

	drawTurtle1(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawLog2a(mv);
	drawLog2b(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );
	
	drawLog3a(mv);
	drawLog3b(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );

	drawTurtle2(mv);
	
	mv = mult( mv, translate( 0.0, 1.0, 0.0 ) );

	drawFly(mv);
}
//
//--- Uppröðun bílaraða ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawCar1a(mv)
{
	var speed = carSpeed1;
	gl.uniform4fv( colorLoc, RED );
	
	if( carXPos1a < -7.5 )
	{ 
		carXPos1a += 15.0;
	}
	drawCar(mv, carXPos1a);
	
	carXPos1a -= speed;
}

function drawCar1b(mv)
{
	var speed = carSpeed1;
	gl.uniform4fv( colorLoc, RED );
	
	if( carXPos1b < -7.5 )
	{ 
		carXPos1b += 15.0;
	}
	drawCar(mv, carXPos1b);
	
	carXPos1b -= speed;
}

function drawCar2(mv)
{
	var speed = carSpeed2;
	gl.uniform4fv( colorLoc, WHITE );
	
	if( carXPos2 < -7.5 )
	{ 
		carXPos2 += 15.0;
	}
	drawCar(mv, carXPos2);
	
	carXPos2 -= speed;
}

function drawCar3a(mv)
{
	var speed = carSpeed3;
	gl.uniform4fv( colorLoc, PURPLE );

	if( 7.5 < carXPos3a )
	{ 
		carXPos3a -= 15.0;
	}
	drawCar(mv, carXPos3a);
	
	carXPos3a += speed;
}

function drawCar3b(mv)
{
	var speed = carSpeed3;
	gl.uniform4fv( colorLoc, PURPLE );

	if( 7.5 < carXPos3b )
	{ 
		carXPos3b -= 15.0;
	}
	drawCar(mv, carXPos3b);
	
	carXPos3b += speed;
}
//
//--- Teikning bíla -------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawCar(mv, carXPos)
{	
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	
	var mv1 = mv;
	
	mv = mult( mv, translate( carXPos, 0.0, -0.25 ) );
	mv = mult( mv, scalem( 2.0, 0.5, 0.5 ) );
	
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	gl.uniform4fv( colorLoc, LIGHTBLUE );
	
	mv1 = mult( mv1, translate( 0.0+carXPos, 0.0, 0.1 ) );
	mv1 = mult( mv1, scalem( 0.9, 0.49, 0.4 ) );
		
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv1) );
    gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}
//
//--- Uppröðun viðarbúta --------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawLog1a(mv)
{
	var speed = logSpeed1;

	if( logXPos1a < -7.5 )
	{
		logXPos1a += 15.0;
	}
	drawLog(mv, logXPos1a);
	
	logXPos1a -= speed;
}

function drawLog1b(mv)
{
	var speed = logSpeed1;

	if( logXPos1b < -7.5 )
	{
		logXPos1b += 15.0;
	}
	drawLog(mv, logXPos1b);
	
	logXPos1b -= speed;
}

function drawLog2a(mv)
{
	var speed = logSpeed2;

	if( 7.5 < logXPos2a )
	{
		logXPos2a -= 15.0;
	}
	drawLog(mv, logXPos2a);
	
	logXPos2a += speed;
}

function drawLog2b(mv)
{
	var speed = logSpeed2;

	if( 7.5 < logXPos2b )
	{
		logXPos2b -= 15.0;
	}
	drawLog(mv, logXPos2b);
	
	logXPos2b += speed;
}

function drawLog3a(mv)
{
	var speed = logSpeed3;

	if( logXPos3a < -7.5 )
	{
		logXPos3a += 15.0;
	}
	drawLog(mv, logXPos3a);
	logXPos3a -= speed;
}

function drawLog3b(mv)
{
	var speed = logSpeed3;

	if( logXPos3b < -7.5 )
	{
		logXPos3b += 15.0;
	}
	drawLog(mv, logXPos3b);
	
	logXPos3b -= speed;
}
//
//--- Teikning viðarbúta --------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawLog(mv, logXPos)
{
	gl.uniform4fv( colorLoc, BROWN );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	
	mv = mult( mv, translate( logXPos, 0.0, -0.72 ) );
	mv = mult( mv, scalem( 2.0, 0.5, 0.5 ) );
	
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}
//
//--- Uppröðun skjaldbaka -------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawTurtle1(mv)
{
	var speed = turtleSpeed1;
	
	if( 300 < turtleDiveTimer1 )
	{
		turtleDive1 = 1.0 - turtleDive1;
		turtleDiveTimer1 = 0.0;
	}
	if(turtleDive1)
	{
		mv = mult( mv, translate( 0.0, 0.0, -0.5 ) );
	}
	if( turtleXPos1 < -7.5 )
	{
		turtleXPos1 += 15.0;
	}
	drawTurtle(mv, turtleXPos1);
	turtleDiveTimer1 += 1.0;
	turtleXPos1 -= speed;
}

function drawTurtle2(mv)
{
	var speed = turtleSpeed2;
	
	if( 500 < turtleDiveTimer2 )
	{
		turtleDive2 = 1.0 - turtleDive2;
		turtleDiveTimer2 = 0.0;
	}
	if(turtleDive2)
	{
		mv = mult( mv, translate( 0.0, 0.0, -0.5 ) );
	}
	if( 7.5 < turtleXPos2 )
	{
		turtleXPos2 -= 15.0;
	}
	drawTurtle(mv, turtleXPos2);
	turtleDiveTimer2 += 1.0;
	turtleXPos2 += speed;
}
//
//--- Teikning skjaldbaka -------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawTurtle(mv, turtleXPos)
{
	gl.uniform4fv( colorLoc, BROWN );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	
	mv = mult( mv, translate( turtleXPos, 0.0, -0.72 ) );
	mv = mult( mv, scalem( 0.9, 0.5, 0.5 ) );
	
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	mv = mult( mv, translate( -1.1, 0.0, 0.0 ) );
	
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
	
	mv = mult( mv, translate( 2.2, 0.0, 0.0 ) );
	
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}
//
//--- Teikning flugu --------------------------------------------------------------------------------------------------------------------------------------------------------------
//
function drawFly(mv)
{
	gl.uniform4fv( colorLoc, BLACK );
	gl.bindBuffer( gl.ARRAY_BUFFER, cubeBuffer );
	
	
	if( flySetting < 1)
	{
		flyPos = -6.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 2)
	{
		flyPos = -4.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 3)
	{
		flyPos = -2.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 4)
	{
		flyPos = 0.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 5)
	{
		flyPos = 2.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 6)
	{
		flyPos = 4.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	else if( flySetting < 7)
	{
		flyPos = 6.0;
		mv = mult( mv, translate( flyPos, 0.0, 0.0 ) );
	}
	
	mv = mult( mv, scalem( 0.1, 0.1, 0.1 ) );
	
	gl.vertexAttribPointer( posLoc1, 3, gl.FLOAT, false, 0, 0 );
	gl.uniformMatrix4fv( mvLoc1, false, flatten(mv) );
	gl.drawArrays( gl.TRIANGLES, 0, numCubeVertices );
}