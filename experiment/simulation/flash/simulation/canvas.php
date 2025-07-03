<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";</script>

   <!--label text display in the top--> 
<canvas id="bgCanvas"  style="height:483px; position:absolute;top:0px;left:-40px;width:645px;background-image:url(<?php getSimPath(); ?>images/BG.png);" ></canvas>
<label id="instructionTxt" style="visibility:hidden" ></label>

<div id="tooltip2" style="background:url(<?php getSimPath(); ?>images/tooltips.png) no-repeat; text-align:left;padding: 8px 2px;  position:absolute;  width:180px; height:35px; z-index:999999999999; display:none;"></div>
<div id="tooltip" style="background:url(<?php getSimPath(); ?>images/tooltip2.png) no-repeat; text-align:justify;padding: 8px 34px;  position:absolute;  width:180px; height:35px; z-index:9999999; display:none;"></div>
<img id="pipe" name="pipe" src="<?php getSimPath(); ?>images/pipe.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
<img id="naflame" name="naflame" src="<?php getSimPath(); ?>images/naflame.png"/>
<img id="kflame" name="kflame" src="<?php getSimPath(); ?>images/kflame.png"/>
<div id="imgBox" >
<img id="img1" name="Fruitimg" src="<?php getSimPath(); ?>images/img1.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" />
<img id="img2" name="Fruitimg" src="<?php getSimPath(); ?>images/img2.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" />
<img id="img3" name="Fruitimg" src="<?php getSimPath(); ?>images/img3.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"   />
<img id="img4" name="Fruitimg" src="<?php getSimPath(); ?>images/img4.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
<img id="img5" name="Fruitimg" src="<?php getSimPath(); ?>images/img5.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"   />
<img id="img6" name="Fruitimg" src="<?php getSimPath(); ?>images/img6.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
<img id="img7" name="Fruitimg" src="<?php getSimPath(); ?>images/img7.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
<img id="img8" name="Fruitimg" src="<?php getSimPath(); ?>images/img8.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
<img id="img9" name="Fruitimg" src="<?php getSimPath(); ?>images/img9.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"  />
</div>

<img id="img0" name="Fruitimg" src="<?php getSimPath(); ?>images/img10.png" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"   />
<img id="StndSoln3" name="StndSoln3" src="<?php getSimPath(); ?>images/beaker.png" draggable="true" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" />
<img id="StndSoln2" name="StndSoln2" src="<?php getSimPath(); ?>images/beaker.png" draggable="true" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" />
<img id="StndSoln1" name="StndSoln1" src="<?php getSimPath(); ?>images/beaker.png" draggable="true" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"/>
<img id="StndSoln0" name="StndSoln0" src="<?php getSimPath(); ?>images/beaker.png" draggable="true" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)"/>
<div id="displayPanel">
  <div id="topValue">138 IE</div>
</div>

<script language="javascript">

</script>

