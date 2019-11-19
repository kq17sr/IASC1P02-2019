function addNumbers()
	{
		var num1 =  Math.floor((Math.random() *10) + 1);
		document.getElementById("firstvalue").value=num1;
		var num2 = Math.floor((Math.random() *10) + 1);
		document.getElementById("secondvalue").value=num2;
    document.getElementById("output").innerHTML=num1 + num2;
	}

	function subtractionBy()
		{
			var num1 =  Math.floor((Math.random() *10) + 1);
			document.getElementById("firstvalue").value=num1;
			var num2 = Math.floor((Math.random() *10) + 1);
			document.getElementById("secondvalue").value=num2;
			document.getElementById("output").innerHTML=num1 - num2;
		}

		function multiplyBy()
			{
				var num1 =  Math.floor((Math.random() *10) + 1);
				document.getElementById("firstvalue").value=num1;
				var num2 = Math.floor((Math.random() *10) + 1);
				document.getElementById("secondvalue").value=num2;
				document.getElementById("output").innerHTML=num1 * num2;
			}

			function divideBy()
				{
					var num1 =  Math.floor((Math.random() *10) + 1);
					document.getElementById("firstvalue").value=num1;
					var num2 = Math.floor((Math.random() *10) + 1);
					document.getElementById("secondvalue").value=num2;
					document.getElementById("output").innerHTML=num1 / num2;
				}
