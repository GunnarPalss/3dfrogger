/////////////////////////////////////////
//                                     //
// Föll sem höndla hreyfingu frosksins //
//                                     //
/////////////////////////////////////////

function moveLeft()
{
	if( frogYPos == 10.0 ){}
	else
	{	
		if( -6.0 < frogXPos )
		{	
			frogXPos -= 1.0;
		}
	}
}

function moveUp()
{
	if( frogYPos == 9.0 )
	{
		if( -5.5 < frogXPos && frogXPos < -4.5 ){}
		else if( -3.5 < frogXPos && frogXPos < -2.5 ){}
		else if( -1.5 < frogXPos && frogXPos < -0.5 ){}
		else if( 0.5 < frogXPos && frogXPos < 1.5 ){}
		else if( 2.5 < frogXPos && frogXPos < 3.5 ){}
		else if( 4.5 < frogXPos && frogXPos < 5.5 ){}
		else
		{
			frogYPos += 1.0;
		}
	}
    else if( frogYPos < 9.0 )
	{
	frogYPos += 1.0;
	}
}

function moveRight()
{
	if( frogYPos == 10.0 ){}
	else
	{
		if( frogXPos < 6.0 )
		{
			frogXPos += 1.0;
		}
	}
}

function moveDown()
{
	if( 0.0 < frogYPos )
	{
		frogYPos -= 1.0;
	}
}