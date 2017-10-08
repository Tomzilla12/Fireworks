let fireworks;
let gravity;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    background(0);

    fireworks = [];
    gravity = createVector(0, 0.1);
}

function draw() {
    background(0, 100);
    stroke(255);
    strokeWeight(2);

    if (random() < 0.05) {
        fireworks.push(new Firework());
    }

    for (let x = 0; x < fireworks.length; x++) {
        let firework = fireworks[x];
        if (firework.dead == true) {
            fireworks.splice(x, 1);
        }
        firework.update();
        firework.show();
    }
}