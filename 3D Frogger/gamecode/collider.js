////////////////////////////////////////////////////////
//                                                    //
// Föll sem höndla collision frosksins við aðra hluti //
//                                                    //
////////////////////////////////////////////////////////

function collider()
{
//
//--- Collision fyrir bíla ------------------------------------------------------------------------------------------------------------------------------------------------------------
//
	if( frogYPos == 1.0 )
	{
		if( carXPos1a - 1.0 < frogXPos && frogXPos < carXPos1a + 1.0 )
		{
			death();
		}
		if( carXPos1b - 1.0 < frogXPos && frogXPos < carXPos1b + 1.0 )
		{
			death();
		}
	}
	
	if( frogYPos == 2.0 )
	{
		if( carXPos2 - 1.0 < frogXPos && frogXPos < carXPos2 + 1.0 )
		{
			death();
		}
	}

	if( frogYPos == 3.0 )
	{
		if( carXPos3a - 1.0 < frogXPos && frogXPos < carXPos3a + 1.0 )
		{
			death();
		}
		if( carXPos3b - 1.0 < frogXPos && frogXPos < carXPos3b + 1.0 )
		{
			death();
		}
	}
//
//--- Collision fyrir viðarbúta og skjaldbökur ( og vatn ) ----------------------------------------------------------------------------------------------------------------------------
//
	if( frogYPos == 5.0 )
	{	
		if( logXPos1a - 1.0 < frogXPos && frogXPos < logXPos1a + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
				frogXPos -= logSpeed1;
			}
		}
		else if( logXPos1b - 1.0 < frogXPos && frogXPos < logXPos1b + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
				frogXPos -= logSpeed1;
			}
		}
		else
		{
			death();
		}
	}
	
	if( frogYPos == 6.0 )
	{	
		if( !turtleDive1)
		{
			if( turtleXPos1 - 1.5 < frogXPos && frogXPos < turtleXPos1 + 1.5 )
			{
				if( -6.3 < frogXPos && frogXPos < 6.3 )
				{
					frogXPos -= turtleSpeed1;
				}
			}
			else
			{
					death();
			}
		}
		else
		{
			death();		
		}
	}
	
	if( frogYPos == 7.0 )
	{	
		if( logXPos2a - 1.0 < frogXPos && frogXPos < logXPos2a + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
				frogXPos += logSpeed2;
			}
		}
		else if( logXPos2b - 1.0 < frogXPos && frogXPos < logXPos2b + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
				frogXPos += logSpeed2;
			}
		}
		else
		{
			death();		
		}
	}
	
	if( frogYPos == 8.0 )
	{	
		if( logXPos3a - 1.0 < frogXPos && frogXPos < logXPos3a + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
			frogXPos -= logSpeed3;
			}
		}
		else if( logXPos3b - 1.0 < frogXPos && frogXPos < logXPos3b + 1.0 )
		{
			if( -6.3 < frogXPos && frogXPos < 6.3 )
			{
			frogXPos -= logSpeed3;
			}
		}
		else
		{
			death();
		}
	}
	
	if( frogYPos == 9.0 )
	{	
		if( !turtleDive2)
		{
			if( turtleXPos2 - 1.5 < frogXPos && frogXPos < turtleXPos2 + 1.5 )
			{
				if( -6.3 < frogXPos && frogXPos < 6.3 )
				{
					frogXPos += turtleSpeed2;
				}
			}
			else
			{
				death();
			}
		}
		else
		{
			death();		
		}
	}
//
//--- Collision fyrir flugur ----------------------------------------------------------------------------------------------------------------------------------------------------------
//
	if( frogYPos == 10.0 )
	{
		if( flyPos - 0.5 < frogXPos && frogXPos < flyPos + 0.5 )
		{
			score();
		}
	}
}