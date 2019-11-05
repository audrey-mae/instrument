//spaceship console // 

let osc 
let env
let frequency = 50
let circle_radius = 0
let circle_x = 0 
let circle_y = 0 
let noise
let noise_env
let bandpass
let takeoff
let landing 
let strangenoise
let alienbeat
let pewpew
let sustain = 0.1
let attack = 0.1

function preload() {
takeoff = loadSound("takeoff.mp3")
landing = loadSound("landing.mp3")
strangenoise = loadSound("strangenoise.mp3")
alienbeat = loadSound("alienbeat.mp3")
pewpew = loadSound("pewpew.mp3")
 }

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	//main oscillator 
	osc = new p5.Oscillator()
	osc.setType("sine")
	osc.amp(0)

	//main envelope
	env = new p5.Envelope()
	env.setADSR(attack, .5, sustain, .1)

	//drum noise
	noise = new p5.Noise()
	noise.setType("white") //brown or pink
	noise.amp(0)

	//drum noise envelope
	noise_env = new p5.Envelope()
	noise_env.setADSR(attack/10, .08, sustain-.1, .01)

	//bandpass filter
	bandpass = new p5.BandPass()
	
	//route the noise through the filter 
	noise.disconnect()
	noise.connect(bandpass)

}

function draw() {

	// if mouseisPressed(){
	// 	image(image, mouseX, mouseY)
	// }

	noStroke()
	//console 
	fill(0)
	rect(0, 0, width, height)

	//window

	push()

	stroke(161, 161, 161)
	strokeWeight(5)
	fill(52, 32, 99)
	rect(130, 0, width-260, height-200, 7)

	strokeWeight(1)

	if (osc.getType() == 'sine'){
			fill(221, 252, 18)
	} else {
			fill(255, 0, 0)
	}
	ellipse(random(130, width-130), random(0, height-200), random(10), random(10))
	ellipse(random(130, width-130), random(0, height-200), random(15), random(15))
	ellipse(random(130, width-130), random(0, height-200), random(15), random(15))
	pop()


	//left slider 1 blue and red
	stroke(161)
	strokeWeight(2)
	fill(map(frequency, 1001, 2000, 0, 255) , 5, 255)

	rect(10, 50, 30, height-100, 7)

	//left slider 2 green and orange
	stroke(161)
	strokeWeight(2)

	fill(map(frequency, 101, 1000, 0, 255) , 150, 55)

	rect(50, 50, 30, height-100, 7)

	//left slider 3 purple and yellow
	stroke(161)
	strokeWeight(2)
	fill(map(frequency, 1, 100, 0, 255) , 195, 52)

	rect(90, 50, 30, height-100, 7)

	//big middle button
	stroke(161, 161, 161)
	strokeWeight(3)

	if (osc.getType() == 'sine'){
			fill(173, 0, 0)
	} else {
			fill(0, 26, 120)
	}

	ellipse(width/2, height-200, 100, 100)

		if (osc.getType() == 'sine'){
			fill(0, 26, 120)
		} else {
				fill(173, 0, 0)
		}

		noStroke()

	ellipse(width/2, height-200, 50, 50)

	//drums
	stroke(random(255), random(255), random(255))
	strokeWeight(2)

	if (osc.getType() == 'sine'){
			fill(52, 235, 207)
	} else {
			fill(235, 171, 33)
	}

	//1 left bottom
	ellipse(200, height-100, 100, 100)

	//2 left top
	ellipse(300, height-150, 75, 75)

	//3 right top 
	ellipse(width - 300, height-150, 75, 75)

	//4 right bottom 
	ellipse(width-200, height-100, 100, 100)

	//5 left bottom small
	ellipse(300, height-50, 75, 75)

	//6 right bottom small
	ellipse(width-300, height-50, 75, 75)

	push() 
	//the dj thing 
	fill(random(0, 255), random(0, 255), random(0, 255))

	//big circle
	if (width < 600) {
			ellipse(width/2, height-75, width/6, 125) 
		}
	if (width > 600 && width < 800) {
			ellipse(width/2, height-75, width/5, 125) 
		}
	if (width > 800 && width < 1200) {
			ellipse(width/2, height-75, width/4, 125) 

	}
	if (width > 1200) {
			ellipse(width/2, height-75, width/3, 125) 

	}

		//littel cirlce
		fill(0)
			if (width < 600) {
					ellipse(width/2, height-75, width/12, 62.5) 
				}
			if (width > 600 && width < 800) {
					ellipse(width/2, height-75, width/10, 62.5) 
				}
			if (width > 800 && width < 1200) {
					ellipse(width/2, height-75, width/8, 62.5) 

			}
			if (width > 1200) {
					ellipse(width/2, height-75, width/6, 62.5) 

			}
	pop()

stroke(161)

// green
	fill(123, 255, 0)
	rect(width-100, (height/4)-90, 70, 70, 20)
	if (mouseX > width-100 && mouseX <width-30 && mouseY > (height/4)-90 && mouseY <(height/4)-20) {
	fill(20, 181, 14)
	rect(width-100, (height/4)-90, 70, 70, 20)
}

//pink
	fill(252, 0, 227)
	rect(width-100, (height/2)-35, 70, 70, 20)
	if (mouseX > width-100 && mouseX < width-30 && mouseY > (height/2)-35 && mouseY < (height/2)+35) {
	fill(161, 11, 158)
	rect(width-100, (height/2)-35, 70, 70, 20)
	}


//yellow
	fill(252, 252, 0)
	rect(width-100, height-(height/4)-70, 70, 70, 20)
	if (mouseX > width-100 && mouseX < width-30 && mouseY > height-(height/4)-70 && mouseY <height-(height/4)) {
	fill(163, 159, 33)
	rect(width-100, height-(height/4)-70, 70, 70, 20)
}

//blue
	fill(0, 255, 221)
	rect(width-100, height/4, 70, 70, 20)
	if (mouseX > width-100 && mouseX < width-30 && mouseY > height/4 && mouseY < (height/4)+70) {
	fill(6, 140, 140)
	rect(width-100, height/4, 70, 70, 20)
}

//orange
	fill(252, 139, 0)
	rect(width-100, height-(height/4)+20, 70, 70, 20)
	if (mouseX > width-100 && mouseX < (width-100)+70 && mouseY > height-(height/4)+20 && mouseY < height-(height/4)+90) {
	fill(171, 102, 5)
	rect(width-100, height-(height/4)+20, 70, 70, 20)
}

//adsr buttons 
		stroke(random(255), random(255), random(255)) 
	//sustain up
		fill(230, 194, 18)
		triangle((width/2)-120, height-180, (width/2)-100, height-140, (width/2)-140, height-140)
	//sustain down
		triangle((width/2)-100, height-180, (width/2)-80, height-140, (width/2)-60, height-180)
	//attack up
		fill(255, 110, 124)
		triangle((width/2)+120, height-180, (width/2)+100, height-140, (width/2)+140, height-140)
	//attack down
		triangle((width/2)+100, height-180, (width/2)+80, height-140, (width/2)+60, height-180)

//cursor
	noStroke()
	fill(255, 255, 0)
	ellipse(circle_x, circle_y, circle_radius, circle_radius)
	if (circle_radius > 0 && mouseIsPressed == false){
		circle_radius -= 2 
		}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function mousePressed(){
	osc.start()
	osc.amp(env)
	env.triggerAttack()

	circle_radius = 30

	circle_x = mouseX
	circle_y = mouseY

	mouseDragged()

	//drums
	//1 left bottom
		//ellipse(200, height-100, 100, 100)
	if (mouseX > 150 && mouseX < 250 && mouseY < (height-50) && mouseY > (height-150)) {
		print("drum1 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("brown") 
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}
	//2 left top
		//	ellipse(300, height-150, 75, 75)
	if (mouseX > 262.5 && mouseX < 337.5 && mouseY < (height-150)+37.5 && mouseY > (height-150)-37.5) {
		print("drum2 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("white")
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}

	//3 right top
		//ellipse(width - 300, height-150, 75, 75)
	if (mouseX < width-262.5 && mouseX > width-337.5 && mouseY < height-112.5 && mouseY > height-187.5) {
		print("drum3 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("white") 
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}

	//4 right bottom
		//ellipse(width-200, height-100, 100, 100)
	if (mouseX < width-150 && mouseX > width-250 && mouseY < height-50 && mouseY > height-150) {
		print("drum4 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("brown") 
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}

	//5 left bottom small
		//ellipse(300, height-50, 75, 75)
	if (mouseX > 262.5 && mouseX < 337.5 && mouseY < height-12.5 && mouseY > height-87.5) {
		print("drum5 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("pink") 
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}

	//6 right bottom small
		//ellipse(width-300, height-50, 75, 75)
	if (mouseX < width-262.5 && mouseX > width-337.5 && mouseY < height-12.5 && mouseY > height-87.5) {
		print("drum6 clicked")
	osc.stop()
	env.triggerRelease()
		noise.setType("pink") 
		noise.start()
		noise.amp(noise_env)
		noise_env.triggerAttack()
	}

//takeoff noise
if (mouseX > width-100 && mouseX <width-30 && mouseY > (height/4)-90 && mouseY <(height/4)-20) {
	print("takeoff")
	takeoff.play()
}

//landing noise
if (mouseX > width-100 && mouseX < (width-100)+70 && mouseY > height-(height/4)+20 && mouseY < height-(height/4)+90) {
	print("landing")
	landing.play()
}

//strangenoise
if (mouseX > width-100 && mouseX < width-30 && mouseY > height/4 && mouseY < (height/4)+70) {
	print("strangenoise")
	strangenoise.play()
}

//alienbeat
if (mouseX > width-100 && mouseX < width-30 && mouseY > (height/2)-35 && mouseY < (height/2)+35) {
	print("alienbeat")
	alienbeat.play()
}

//pewpew
if (mouseX > width-100 && mouseX < width-30 && mouseY > height-(height/4)-70 && mouseY <height-(height/4)) {
	print("pewpew")
	pewpew.play()
}


}


function mouseReleased(){
	osc.stop()
	env.triggerRelease()

	noise.stop()
	noise_env.triggerRelease()

}

function mouseDragged(){
	
	//left slider 2 green and orange
		//rect(50, 50, 30, height-100)
	if (mouseX < 80 && mouseX > 50 && mouseY > 50 && mouseY < height-100) {
		frequency = map(mouseY, 0, height, 1000, 201)
	}

	osc.freq(frequency)

	// left slider 1 red and blue 
		//rect(10, 50, 30, height-100)
	if (mouseX > 10 && mouseX <40 && mouseY > 50 && mouseY < height-100) {
		frequency = map(mouseY, 0, height, 2000, 1001)
	}

	//left slider 3 purple and yellow
		//rect(90, 50, 30, height-100)
	if (mouseX > 90 && mouseX < 120 && mouseY > 50 && mouseY <height-100) {
		frequency = map(mouseY, 0, height, 200, 50)
	}

//disco DJ 
   if (width < 600) {
   		if (mouseX > (width/2)-(width/12) && mouseX < (width/2)+(width/12) && mouseY < height-12.5 && mouseY > height-137.5) {
 			print("discoDJinitiate.1")
 			frequency = map(mouseY, 0, height, 2500, 1500)
   		}
		}
	if (width > 600 && width < 800) {
		if (mouseX > (width/2)-(width/10) && mouseX < (width/2)+(width/10) && mouseY < height-12.5 && mouseY > height-137.5) {
			print("discoDJinitiate.2")
 			frequency = map(mouseY, 0, height, 1500, 500)
	}
	}
	if (width > 800 && width < 1200) {
		if (mouseX > (width/2)-(width/8) && mouseX < (width/2)+(width/8) && mouseY < height-12.5 && mouseY > height-137.5) {
			print("discoDJinitiate.3")
			frequency = map(mouseY, 0, height, 2000, 900)
	}		
	}
	if (width > 1200) {
		if (mouseX > (width/2)-(width/6) && mouseX < (width/2)+(width/6 && mouseY < height-12.5 && mouseY > height-137.5)) {
			print("discoDJinitiate.4")
			frequency = map(mouseY, 0, height, 700, 10)
	}
	}

	circle_x = mouseX
	circle_y = mouseY

	//fill(random(255))

	// if (mouseX < width/2) {
	// 	osc.setType('sine')
	// } else {
	// 	osc.setType('square')
	// }

}

function mouseClicked(){
	//big button
	if (mouseX > (width/2) - 50 && mouseX < (width/2) + 50 && mouseY > (height-200) -50 && mouseY < (height-200) + 50){
		print('button clicked')
		if(osc.getType() == 'sine') {
			osc.setType('sawtooth')
		} else {
			osc.setType('sine')
		}
	}

	//adsr buttons 
		//sustain up
				//triangle((width/2)-120, height-180, (width/2)-100, height-140, (width/2)-140, height-140)
		if (mouseX > (width/2)-130 && mouseX < (width/2)-110 && mouseY < height-140 && mouseY > height-180) {
			print('sustain increased')
			env.setADSR(attack, .5, sustain+20, .1)
		}
	//sustain down
		//triangle((width/2)-100, height-180, (width/2)-80, height-140, (width/2)-60, height-180)
		if (mouseX > (width/2)-90 && mouseX < (width/2)-70 && mouseY < height-140 && mouseY > height-180) {
			print('sustain decreased')
			env.setADSR(attack, .5, sustain-20, .1)
		}
	//attack up
		//triangle((width/2)+120, height-180, (width/2)+100, height-140, (width/2)+140, height-140)
		if (mouseX < (width/2)+130 && mouseX > (width/2)+110 && mouseY < height-140 && mouseY > height-180) {
			print('attack increased')
			env.setADSR(attack+5, .5, sustain, .1)
		}
	//attack down
		//triangle((width/2)+100, height-180, (width/2)+80, height-140, (width/2)+60, height-180)
		if (mouseX < (width/2)+90 && mouseX > (width/2)+70 && mouseY < height-140 && mouseY > height-180) {
			print('attack decreased')
			env.setADSR(attack-5, .5, sustain, .1)
		}
}

function keyTyped() {
		print("i typed the key " + key)

		if (key == 'k') {

		}
	}