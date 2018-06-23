<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="description" content="Here, we cover the differences between speed and velocity and enable you to solve your own practice problems">
	<title>IP | Velocity</title>
	<link rel="shortcut icon" href="/img/ip-logo.ico" type="image/ico">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
	<link rel="stylesheet" href="velocity.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

	<?php
		include_once "nav-template.php";
	?>

	<section id="main-content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<h2 class="animated bounceInDown section-heading">Velocity</h2>
					<div class="pages-nav" id="top-pager">
						<ul class="pager">
							<li><a href="/2d-displacement" class="prev-page-btn"><span class="glyphicon glyphicon-chevron-left"></span>Previous: 2D Displacement</a></li>
							<li><a href="/acceleration" class="next-page-btn">Next: Acceleration<span class="glyphicon glyphicon-chevron-right"></span></a></li>
						</ul>
					</div>
				</div>
			</div>  <!-- Prev and Next Page Btns-->

			<div class="row animated fadeInRight">
				<div class="col-md-8">
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="panel-title radio-btn-selection">
								<div class="solve-selection">
									<form>
										<span class="badge">1</span>
										<span><b>Solve:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="solve-btns" id="solve-velocity-radio-btn" name="radio-one">
										    <span class="checkmark">velocity</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="solve-btns" name="radio-one" id="solve-displacement-radio-btn">
										    <span class="checkmark">displacement</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="solve-btns" name="radio-one" id="solve-time-interval-radio-btn">
										    <span class="checkmark">time interval</span>
										</label>
									</form>
								</div>
								<div class="unit-selection">
									<form>
										<span class="badge">2</span>
										<span><b>Unit:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="first-units" name="radio-two" units="m" id="meter-radio-btn"/>
										    <span class="checkmark">meters</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="first-units" name="radio-two" units="mi" id="mile-radio-btn"/>
										    <span class="checkmark">miles</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="first-units" name="radio-two" units="ft" id="feet-radio-btn"/>
										    <span class="checkmark">feet</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="first-units" name="radio-two" units="km" id="kilometer-radio-btn"/>
										    <span class="checkmark">kilometers</span>
										</label>
									</form>
								</div>
								<div class="time-selection">
									<form>
										<span class="badge">3</span>
										<span><b>Time:&nbsp;</b></span>
										<label class="radio-btn">
										 	<input type="radio" class="second-units" name="radio-three" units="sec" id="sec-radio-btn">
										    <span class="checkmark">seconds</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="second-units" name="radio-three" units="min" id="min-radio-btn">
										    <span class="checkmark">minutes</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="second-units" name="radio-three" units="hr" id="hour-radio-btn">
										    <span class="checkmark">hours</span> |
										</label>
										<label class="radio-btn">
										    <input type="radio" class="second-units" name="radio-three" units="day" id="day-radio-btn">
										    <span class="checkmark">days</span>
										</label>
									</form>
								</div>
							</div>
						</div>
						<div class="panel-body" id="main-panel">
							<div class="row">
								<div class="col-md-4">
									<h4 class="text-center"><span class="badge">4</span> <strong>Values</strong></h4>
									<form class="form-group">
									<input class="form-control part-one-fields" type="number" id="velocity-field-one" placeholder="velocity">
									<input class="form-control part-one-fields" type="number" name="displacement" id="displacement-field-one" placeholder="displacement (&Delta;x)">
									<input class="form-control part-one-fields" type="number" name="time-interval" id="time-interval-field-one" placeholder="time interval (&Delta;t)">
									<input class="form-control part-one-fields" type="number" id="sig-figs-field" placeholder="# of sig-figs (optional)">
									<div class="form-divider"></div>
									<div class="calc-and-clear">
										<button type="button" id="calculate-btn"><b>Calculate</b></button>
										<button type="button" id="clear-btn"><b>Clear</b></button>
									</div>
								</div>
								<div class="col-md-8 text-center">
									<h4 id="equation-heading"><strong>Equation</strong></h4>
									<div id="slide-arrows-container">
										<div class="slide-arrow-btn" id="prev-slide-btn"><span class="glyphicon glyphicon-chevron-left"></span></div>
										<div class="slide-arrow-btn" id="next-slide-btn"><span class="glyphicon glyphicon-chevron-right"></span></div>
									</div>
									<div id="outer-image-container">
										<div id="inner-image-container">
											<img src="../img/newVelocityEquation.PNG" class="img-responsive slide" alt="Velocity Equation"/>
											<img src="../img/newDisplacementEquation.PNG" class="img-responsive slide" alt="Displacement Equation"/>
											<img src="../img/newTimeIntervalEquation.PNG" class="img-responsive slide" alt="Time Interval Equation"/>
										</div>
										<div id="slide-bar-indicators">
											<div class="slide-bar"></div>
											<div class="slide-bar"></div>
											<div class="slide-bar"></div>
										</div>
									</div>
									<div id="solo-image">
										<img src="../img/newVelocityFrames.PNG" class="img-responsive" alt="Velocity Frames"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="panel-title text-center" id="background-heading"><strong>Background:</strong></div>
						</div>
						<div class="panel-body module-section">
							<div class="module-box">
								<div class="module">
									<div class="module-front" id="first-front">Speed</div>
									<div class="module-back" id="first-back">
										Scalar, so we consider its magnitude and not its direction
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front">Velocity</div>
									<div class="module-back">
										Vector, so we consider its direction and its magnitude
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front">Distance v. Displacement</div>
									<div class="module-back">
										Distance = total area traveled. Displacement is net distance
									</div>
								</div>
							</div>
							<div class="module-box">
								<div class="module">
									<div class="module-front" id="last-front">Graph Below</div>
									<div class="module-back" id="last-back">
										An object that changed positions over time has velocity
									</div>
								</div>
							</div>
							<div class="module-img">
								<img src="../img/positionVTimeGraph.PNG" class="img-responsive" alt="Position v. Time Graph">
							</div>
						</div>
					</div>
				</div>
			</div> <!-- First Section Equations / Calcs / Pictures -->

			<div class="panel panel-default">
				<div class="panel-body" id="third-pics-panel">
					<div class="row animated fadeInLeft" id="third-pics-row">
						<div class="col-sm-4 third-page-pics">
							<img src="../img/tourDeFrance.jpeg" alt="Bike Race" class="img-responsive">
							<div class="img-caption">
								<p>In 2015, Rohan Dennis broke the hour world record in Switzerland by covering a net distance of 52.491km. <a href="https://www.theguardian.com/sport/2015/feb/09/rohan-dennis-sets-new-hour-record" target="_blank"/> (Source)</a></p>
							</div>
						</div>
						<div class="col-sm-4 third-page-pics">
							<img src="../img/swimmer.jpeg" alt="Swimmer" class="img-responsive">
							<div class="img-caption">
								<p>Frederick Bousquest set a world record for the 50 m freestyleat 20.94 seconds, an average speed of 5.342 mph. <a href="https://www.teamusa.org/News/2009/April/26/Bousquet-sets-50-meter-freestyle-record" target="_blank"/> (Source)</a></p>
							</div>
						</div>
						<div class="col-sm-4 third-page-pics">
							<img src="../img/cheetah.jpg" alt="Cheetah" class="img-responsive">
							<div class="img-caption">
								<p>Cheetahs can reach speeds of up to 75 miles per hour when chasing prey, but only for relatively short bursts. <a href="http://www.speedofanimals.com/animals/cheetah" target="_blank"/> (Source)</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- third page pics -->


			<div class="line-divider"></div>

			<?php
				include_once "practice.php";
				include_once "conversion-calculator.php";
		  ?>

			<div class="modal fade example-modal" id="my-modal-one" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="text-center">Time Interval</h4>
						</div>
						<div class="modal-body">
              <button class="accordion first-accordion"><strong>Problem</strong></button>
              <div class="modal-panel">
                  <p>
                      A typical bowling ball that ois released in a straight line can reach up to 21 mph while traveling from x1 = 1.8 meters to x2 = 7.8 meters. How much time does it take for it to travel that distance?(1 mph = 0.447 m/s)
                  </p>
              </div>
              <button class="accordion"><strong>Given Variables</strong></button>
              <div class="modal-panel">
                  <p>
                      <ul>
                          <li><b>Equation</b> : v = (&Delta;x) / (&Delta;t)</li>
                          <li><b>Equation for &Delta;t</b> : (&Delta;x) / v</li>
                          <li><b>Displacement (&Delta;x)</b> : 7.8 meters - 1.8 meters</li>
                          <li><b>Velocity</b> : 21 mph (1 mph = 0.447 m/s)</li>
                      </ul>
                  </p>
              </div>
							<button class="accordion"><strong>Illustration</strong></button>
              <div class="modal-panel">
                  <img src="img/velocityAccordionImg1.PNG" alt="Bowling"/>
              </div>
              <button class="accordion last-accordion"><strong>Solution</strong></button>
              <div class="modal-panel">
                  <p>
                      <ol>
                          <li><b>Equation</b> : Velocity = (&Delta;x) / (&Delta;t)</li>
                          <li><b>Convert Units</b> : 1 mph = 0.447 m/s, therefore 21 mph = 9.39 m/s</li>
                          <li><b>Displacement</b> : 7.8 - 1.8 = 6 meters</li>
                          <li><b>Solve for &Delta;t</b> : (6m) / (9.39 m/s) = 0.639 seconds</li>
                      </ol>
                  </p>
              </div>
          </div>
						<div class="modal-footer text-center">
							<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
						</div>
					</div>
				</div>
			</div>

		<div class="modal-container">
			<div class="modal fade example-modal" id="my-modal-two" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="text-center">Velocity</h4>
						</div>
						<div class="modal-body">
							<button class="accordion first-accordion"><strong>Problem</strong></button>
							<div class="modal-panel">
								<p>
									A guard dog walks 130 meters in one trip around the perimeter of a building. If it takes him 230 seconds to make this trip. What was his speed in that one trip?
								</p>
							</div>
							<button class="accordion"><strong>Given Variables</strong></button>
							<div class="modal-panel">
								<p>
									<ul>
										<li><b>Equation</b> : Speed = distance / time interval</li>
										<li><b>Distance</b> : 130 meters</li>
										<li><b>Time interval</b> : 230 seconds</li>
									</ul>
								</p>
							</div>
							<button class="accordion"><strong>Illustration</strong></button>
							<div class="modal-panel">
								<img src="img/velocityAccordionImg2.PNG" alt="Perimeter"/>
							</div>
							<button class="accordion last-accordion"><strong>Solution</strong></button>
							<div class="modal-panel">
								<p>
									<ol>
										<li><b>Equation</b> : Speed = distance / time interval</li>
										<li><b>Plug in Variables</b> : Speed = 130 meters / 230 seconds</li>
										<li><b>Dog's Speed</b> : 0.565 meters / sec</li>
									</ol>
								</p>
							</div>
						</div>
						<div class="modal-footer text-center">
							<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div class="modal-container">
			<div class="modal fade example-modal" id="my-modal-three" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="text-center">Net Displacement</h4>
						</div>
						<div class="modal-body">
							<button class="accordion first-accordion"><strong>Problem</strong></button>
							<div class="modal-panel">
								<p>
									A ball that is thrown in a straight line with a velocity of 80 mph goes from x<sub>i</sub> = 1.5 m to x<sub>f</sub> = 34 m. How much time does this ball take to travel that distance?
								</p>
							</div>
							<button class="accordion"><strong>Given Variables</strong></button>
							<div class="modal-panel">
								<p>
									<ul>
										<li><b>Equation</b>: &Delta;t = displacement / velocity</li>
										<li><b>Final position</b> : 34 m</li>
										<li><b>Initial position</b> : 1.5 m</li>
										<li><b>Velocity</b> : 80 mph</li>
									</ul>
								</p>
							</div>
							<button class="accordion"><strong>Illustration</strong></button>
							<div class="modal-panel">
								<img src="img/velocityAccordionImg3.PNG" alt="Ball Thrown"/>
							</div>
							<button class="accordion last-accordion"><strong>Solution</strong></button>
							<div class="modal-panel">
								<p>
									<ol>
										<li><b>Displacement</b> : final-p - initial-p = 34 - 1.5 = 32.5 meters</li>
										<li><b>Velocity</b> : 1 mph = 0.447 m/s, therefore 80 mph = 35.76 m/s</li>
										<li><b>&Delta;t</b> : 32.5 meters / 35.75 m/s = 0.909 seconds</li>
									</ol>
								</p>
							</div>
						</div>
						<div class="modal-footer text-center">
							<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Calculator Modal -->
				<div class="modal fade" id="calculator-modal" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="text-center">Calculator</h4>
							</div>
								<div class="modal-body">

									<?php
										include_once "calculator.php";
								  ?>

									<div id="calculator-tooltip"></div>
								</div>
							<div class="modal-footer text-center" id="calc-modal-footer">
								<button type="button" class="btn glyphicon glyphicon-remove" data-dismiss="modal"></button>
							</div>
						</div>
					</div>
					<div class="close-modal-btn">
						<span class="btn glyphicon glyphicon-remove"></span>
					</div>
				</div>
				<!-- End of Calculator Modal -->

		</div> <!-- END OF CONTAINER -->
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<ul class="pager">
						<li><a href="/2d-displacement" class="prev-page-btn"><span class="glyphicon glyphicon-chevron-left"></span>Previous: 2D Displacement</a></li>
						<li><a href="/acceleration" class="next-page-btn">Next: Acceleration<span class="glyphicon glyphicon-chevron-right"></span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Go back to top -->
	<div id="go-up-container">
		<button type="button" id="go-up-btn"><span class="glyphicon glyphicon-chevron-up"></span></button>
	</div>

	<!-- <script type="text/javascript" src="../js/smoothSlideWBS.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="velocity.js"></script>
	<script type="text/javascript" src="jsCalculator.js"></script>







</body>
</html>
