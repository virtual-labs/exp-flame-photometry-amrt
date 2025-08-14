<form name="lister"  method="post">
<ul>
<li><h1>Variables<span></span></h1>
<div class="varBox"><br />
<p class="varTitle" >Select the Test:
     <select class="dropBox" name="thelist3" id="testId" onChange="testCombo(this.value);" >
        <option value="potassium">K&#8314;</option>
  		<option value="sodium">Na&#8314;</option>  					
    </select>
 </p><br/>
<p class="varTitle" >Select the Sample:
	<select class="dropBox" name="thelist2" id="thelist2" onchange="sampleCombo(this)">
     </select>
    </p><br/>
    <div style="position:relative;">
<p><input type="button" class="subButton" name="plot" value="Aspirate" disabled="disabled" onClick="AspirateFN()" id="plot" ></p>
<p><input type="button" class="subButton" name="Start" value="Start Test" disabled="disabled" onClick="StartFun()" id="Start" ></p> 
 <p align="center"><input type="button" class="subButton" id="reset" name="submit" value="Reset" onclick="resetFN();window.location.reload()" /></p>
</div>
<br/>
</div>
</li>
<li><h1>Instructions<span></span></h1>
<div id="txt12" class="varBox">
<table>
<tr><td><p class="instruction1" >1.</p></td><td><p class="instruction" >Select the test. </p></td></tr>
<tr><td><p class="instruction1" >2.</p></td><td><p class="instruction" >Click and drag each of the standard solution below the Capillary tube and click on the "Aspirate" button to calibrate the machine. </p></td></tr>
<tr><td><p class="instruction1" >3.</p></td><td><p class="instruction" >Drag the sample to place it in the orginal position. </p></td></tr>
<tr><td><p class="instruction1" >4.</p></td><td><p class="instruction" >Then select the fruit juice from the sample list . </p></td></tr>
 <tr><td><p class="instruction1" >5.</p></td><td><p class="instruction" >Click and drag the fruit juice sample below the Capillary tube and click on the " Start Test " button to measure the concentration.</p></td></tr>
</table>
</div>
</li>
</ul>
</form>