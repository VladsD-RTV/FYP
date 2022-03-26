/*
*******************************************************************
Function To Start JS
******************************************************************
*/
function start(){
	browserDetection();
	myTimer();
	hitCount();
	scrollBox();
}

/*
*******************************************************************
Script 1: Display of current time
******************************************************************
*/
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.getElementById("realtime").innerHTML = time;
}

/*
*******************************************************
Script 2: Hit Page Counter
***********************************************************
*/
function hitCount(){
	if (localStorage.pagecount){
		localStorage.pagecount=Number(localStorage.pagecount) +1;
	}
	else{
		localStorage.pagecount=1;
	}
	document.getElementById("hits").innerHTML=localStorage.pagecount;
}//end hitCount

/*
*******************************************************************
Script 3: Browser Plugin Detection
This function detects the user browser
******************************************************************
*/
function browserDetection() {
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.getElementById("browser").innerHTML="Your browser is Chrome";
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.getElementById("browser").innerHTML="Your browser is Opera";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
       document.getElementById("browser").innerHTML="Your browser is Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.getElementById("browser").innerHTML="Internet Browser";
    }
    else{
       document.getElementById("browser").innerHTML="Unknown Browser";
    }
}// end function browserDetection

/*
/*****************************************************************
Script 4:  Scrolling Text
This function is used for Scrolling Text
****************************************************************
*/
var message = "Welcome To the Website!";
i = 0;
function scrollBox() {
	i++;
	if(i > message.length) {
	    i = 1;
	}
	document.forms[0].elements[0].value = message.substring(0,i)+"_";
	setTimeout("scrollBox()",100);
}//end function scrollBox

/*****************************************************************
Script 5:  function for the filter selecction
Used for outputing the items to screan
****************************************************************
*/
filterSelection("all")
function filterSelection(c)
{
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*****************************************************************
Script 6: Used for Generating the character stats
****************************************************************
*/

function startstatgen()
{
	const levelcheck = document.getElementById("inputlevelID").value;
	let levelbonus = 0;
	let levelbuff = 0;

	if(levelcheck > 0)
	{
	 let strenghtDice = rollstat(1,6);
	 let dexDice = rollstat(1,6);
	 let conDice = rollstat(1,6);
	 let intDice = rollstat(1,6);
	 let wisDice = rollstat(1,6);
	 let chaDice = rollstat(1,6);

	 if(levelcheck >= 4 && levelcheck < 8)
	 {
		 levelbonus = 2;
	 }
	 if(levelcheck >= 8 && levelcheck < 12)
	 {
		 levelbonus = 4;
	 }
	 if(levelcheck >= 12 && levelcheck < 16)
	 {
		 levelbonus = 6;
	 }
	 if(levelcheck >= 16 && levelcheck < 20)
	 {
		 levelbonus = 8;
	 }
	 if(levelcheck == 20)
	 {
		 levelbonus = 10;
	 }

	 let smallestdicecombo = Math.min(strenghtDice,dexDice,conDice,intDice,wisDice,chaDice);
	 if (smallestdicecombo == strenghtDice)
	 {
		 strenghtDice = strenghtDice + levelbonus;
		 levelbuff = 1;
		 console.log("str buff");
	 }
	 if (smallestdicecombo == dexDice && levelbuff == 0)
	 {
		 dexDice = dexDice + levelbonus;
		 levelbuff = 1;
		 console.log("dex buff");
	 }
	 if (smallestdicecombo == conDice && levelbuff == 0)
	 {
		 conDice = conDice + levelbonus;
		 levelbuff = 1;
		 console.log("con buff");
	 }
	 if (smallestdicecombo == intDice && levelbuff == 0)
	 {
		 intDice = intDice + levelbonus;
		 levelbuff = 1;
		 console.log("int buff");
	 }
	 if (smallestdicecombo == wisDice && levelbuff == 0)
	 {
		 wisDice = wisDice + levelbonus;
		 levelbuff = 1;
		 console.log("wis buff");
	 }
	 if (smallestdicecombo == chaDice && levelbuff == 0)
	 {
		 chaDice = chaDice + levelbonus;
		 levelbuff = 1;
		 console.log("cha buff");

	 }


	 document.getElementById('str-stateid').value = strenghtDice;
	 document.getElementById('dex-stateid').value = dexDice;
	 document.getElementById('con-stateid').value = conDice;
	 document.getElementById('int-stateid').value = intDice;
	 document.getElementById('wis-stateid').value = wisDice;
	 document.getElementById('cha-stateid').value = chaDice;


 }//end if
 if(levelcheck == 0)
 {
	 alert("Please enter a level before generating stats");
 }

}

//script which rolls the dice
function rollstat(min,max)
{
	 let dice1 = Math.floor(Math.random() * (max-min+1) +1);
	 console.log(dice1);
	 let dice2 = Math.floor(Math.random() * (max-min+1) +1);
	 console.log(dice2);
	 let dice3 = Math.floor(Math.random() * (max-min+1) +1);
	 console.log(dice3);
	 let dice4 = Math.floor(Math.random() * (max-min+1) +1);
	 console.log(dice4);
	 let smallestdice = Math.min(dice1,dice2,dice3,dice4);
	 console.log(smallestdice);
	 let total = dice1 + dice2 + dice3 + dice4 - smallestdice;
	 console.log(total);
	 return total;
}

/*****************************************************************
Script 7: Class Selection Script
****************************************************************
*/
function SelectionClass(classNo)
{
	const levelcheck = document.getElementById("inputlevelID").value;

	if(levelcheck > 0)
	{
		console.log(classNo);
		let classtype = classNo;
		if(classtype == "0")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "FIGHTER Primary Ability: Dexterity (DEX) and Strength (STR) Hit Dice: d10 Strengths: Healing themselves and extra combat attacks. Saves: Constitution and Strength Experts in combat, Fighters face death nearly every day, especially while meting it out to their foes. Out of all the d&d 5th edition classes, they’re best known for dealing damage. But just like Barbarians,                                                                they’re not going to be of much help if you’re stuck in a tricky situation from which you can’t punch your way out. That’s because Fighter 5e don’t have enough Wisdom for solving problems or casting spells.";

			healthUpdate(0);
		}//end if

		if(classtype == "1")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "RANGER Primary Ability: Wisdom (WIS) and Dexterity (DEX) Hit Dice: d10 Strengths: Wilderness survival and attacking several enemies at a time. Saves: Dexterity and Strength Rangers tend to be lone wolves, but don’t let that fool you! They’re massively skilled in tracking and hunting and are expert woodsmen. They’re your go-to when you want a couple of scouts for your group. Their fighting abilities are best tapped when facing their Favored Enemies. But in the case of other foes, Ranger 5e is not at much of an advantage.";
			healthUpdate(1);
		}//end if

		if(classtype == "2")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "WIZARD Primary Ability: Intelligence (INT) Hit Dice: d6 Strengths: The longest and the most versatile list of spells. Saves: Wisdom and Intelligence Talk about learning magical theories and then applying the same it’s a Wizard! With the help of their Intelligence and knowledge, they can easily outsmart their foes to get out of sticky situations. Their spell list seems never-ending, and you can always trust them to have a plan lurking at the back of their minds. Wizard 5e is all you need to enter the magical realm.";
			healthUpdate(2);
		}//end if
		if(classtype == "3")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "CLERIC Primary Ability: Wisdom (WIS) Hit Dice: d8 Strengths: Healing others and bonus Domain Spells. Saves: Charisma and Wisdom Basically a healer, the Cleric 5e is a very versatile one. Clerics can be quiet at one time, and start wielding maces and other weapons at another. Some say that they’re blessed with divine magic, as they are devout worshippers of their gods. They usually cast spells on which they need to focus throughout the time during which the effects of the spells remain.";
			healthUpdate(3);
		}//end if
		if(classtype == "4")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "MONK Primary Ability: Wisdom (WIS) and Dexterity (DEX) Hit Dice: d8 Strengths: Not taking a hit too quickly. Saves: Dexterity and Strength How many of you think ninjas are cool? Well, if you do, then you’re going to love the Monks. Their speed and defensive abilities are both top-notch. This is why they can move with perfect ease in a battle, like getting out of tight places or flitting to where the fight is the thickest. But if 	you’re looking for the most robust character class, then the Monk 5e won’t be a suitable option for you.";
			healthUpdate(4);
		}//end if
		if(classtype == "5")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "BARD Primary Ability: Charisma (CHA) Hit Dice: d8 Strengths: Support Spell Casting and a Jack-of-all-trades.Saves: Charisma and Dexterity To get a Bard to cast a spell on your foes, you need to put on your out-of-the-box thinking cap. Bards tend to be quite smart, and they love socializing with different kinds of people. As you might’ve guessed, their charismatic abilities are at an all-time high. But their being sociable might be a reason why introverts find the Bard 5e to be one of the most challenging dnd classes to play.";
			healthUpdate(5);
		}//end if
		if(classtype == "6")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "DRUID Primary Ability: Wisdom (WIS)Hit Dice: d8 Strengths: Shapeshifting and out-of-combat utility. Saves: Wisdom and Intelligence Druids are even more versatile than Clerics, being able to shapeshift into animals they’ve seen before. They consider themselves to be nature’s extensions, as they can harness the natural elements to obey their will. At other times, they can heal people with the help of spells. But Druid 5e spells are a lot weaker than those of Wizards or Sorcerers.";
			healthUpdate(6);
		}//end if
		if(classtype == "7")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "ROGUE Primary Ability: Dexterity (DEX) Hit Dice: d8 Strengths: Sneaking on foes unawares and maximum potential damage. Saves: Intelligence and Dexterity If you’re all up for wicked ways of gaining victory, like lying, stealing, backstabbing, and cheating, then meet the Rogue 5e. Their combat skills are unique, and, like Rangers, they scout ahead for testing the ground. But if there’s no cover nearby and a Rogue is caught in the open, it might spell doom for this character.";
			healthUpdate(7);
		}//end if
		if(classtype == "8")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "PALADIN Primary Ability: Charisma (CHA) and Strength (STR) Hit Dice: d10 Strengths: Weapons proficiency and healing spells. Saves: Charisma and Wisdom The Paladin can be described as ‘righteous’ warriors, as they’re wholly devoted to their oath. The path that they follow depends on the promise they make. For example, if the Paladin 5e takes the Oath of Vengeance, they’ll forget everything else and entirely focus on pursuing the guilty.";
			healthUpdate(8);
		}//end if
		if(classtype == "9")
		{
			document.getElementById('DisplayInfoOnClass').innerHTML = "BARBARIAN Primary Ability: Strength (STR) Hit Dice: d12 Strengths: Damage absorption and reckless attacks. Saves: Constitution and StrengthIf you choose Barbarian out of all the classes, you can forget about all stats other than CON and STR. That’s because the Barbarian 5e is more inclined towards combat than anything else. And if you pair that with this character’s rage, you’ve got one hell of a fierce warrior! But if you’re stuck in a situation where fighting won’t help, the Barbarian won’t be of much use to you, I’m afraid.";
			healthUpdate(9);
		}//end if
	}//end main if
	if(levelcheck == 0)
	{
		alert("Please Enter a level");
	}//end if

}

/*****************************************************************
Script 10: Adjust skills based off level, prof,
****************************************************************
*/
function healthUpdate(characteridset)
{
	let charset = characteridset;
	const profbonus = document.getElementById('InputProfBonusID').value;
	const levelbonus = document.getElementById('inputlevelID').value;
	const constitution = document.getElementById('con-stateid').value;

	console.log("the level is" +levelbonus);
	//Get the health with level and con
	let constprof = constitutioncalc(constitution);
	console.log("This is the con multipler :"+constprof);
	let healthpoints = constprof * levelbonus;
	console.log("healthpoints ->"+healthpoints);
	let diceHP = 0;

	if(charset == 0)
	{
			diceHP = diceHprand(levelbonus,10);
			console.log("diceHp random -> "+diceHP);
			healthpoints = healthpoints + 10 + diceHP;
			document.getElementById("HPID").value = healthpoints;
	}//end if
	if(charset == 1)
	{
		diceHP = diceHprand(levelbonus,10);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 10 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}

	if(charset == 2)
	{
		diceHP = diceHprand(levelbonus,6);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 6 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 3)
	{
		diceHP = diceHprand(levelbonus,8);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 8 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 4)
	{
		diceHP = diceHprand(levelbonus,8);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 8 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 5)
	{
		diceHP = diceHprand(levelbonus,8);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 8 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 6)
	{
		diceHP = diceHprand(levelbonus,8);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 8 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 7)
	{
		diceHP = diceHprand(levelbonus,8);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 8 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 8)
	{
		diceHP = diceHprand(levelbonus,10);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 10 + diceHP;
		document.getElementById("HPID").value = healthpoints;
	}
	if(charset == 9)
	{
		diceHP = diceHprand(levelbonus,12);
		console.log("diceHp random -> "+diceHP);
		healthpoints = healthpoints + 12 + diceHP;
		document.getElementById("HPID").value = healthpoints;
		}

}

function constitutioncalc(constitution){
	checkcon = constitution;
	let checksum = 0;
	if(checkcon >= 0 && checkcon < 2)
	{
		checksum = -5;
		return checksum;
	}
	if(checkcon >= 2 && checkcon < 4)
	{
		checksum = -4;
		return checksum;
	}
	if(checkcon >= 4 && checkcon < 6)
	{
		checksum = -3;
		return checksum;
	}
	if(checkcon >= 6 && checkcon < 8)
	{
		checksum = -2;
		return checksum;
	}
	if(checkcon >= 8 && checkcon < 10)
	{
		checksum = -1;
		return checksum;
	}
	if(checkcon >= 10 && checkcon < 12)
	{
		checksum = 0;
		return checksum;
	}
	if(checkcon >= 12 && checkcon < 14)
	{
		checksum = 1;
		return checksum;
	}
	if(checkcon >= 14 && checkcon < 16 )
	{
		checksum = 2;
		return checksum;
	}
	if(checkcon >= 16 && checkcon < 18 )
	{
		checksum = 3;
		return checksum;
	}
	if(checkcon >= 18 && checkcon < 20 )
	{
		checksum = 4;
		return checksum;
	}
	if(checkcon >= 20 && checkcon < 22 )
	{
		checksum = 5;
		return checksum;
	}
	if(checkcon >= 22 && checkcon < 24 )
	{
		checksum = 6;
		return checksum;
	}
	if(checkcon >= 24 && checkcon < 26 )
	{
		checksum = 7;
		return checksum;
	}
	if(checkcon >= 26 && checkcon < 28 )
	{
		checksum = 8;
		return checksum;
	}
	if(checkcon >= 28 && checkcon < 30 )
	{
		checksum = 9;
		return checksum;
	}
	if(checkcon >= 30 && checkcon < 32 )
	{
		checksum = 10;
		return checksum;
	}
}

function diceHprand(value,hitdice)
{
	let valuelvl = value;
	let hitdicelvl = hitdice;
	let total = 0;
	console.log("this is the char value :"+valuelvl);
	console.log("this is the hit dice level :"+hitdicelvl);
	let i = 0;
	for(i = 0; i < valuelvl; i++)
	{
		total = total + Math.floor(Math.random() * (hitdicelvl-1+1) +1);
	}
	console.log("The total from the dice score was -> "+total);
	return total;
}
