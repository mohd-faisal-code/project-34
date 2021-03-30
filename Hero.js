class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			density: 1.2, 
			friction: 1,
			isStatic:false,
			restitution:0
		};
		this.body=Bodies.rectangle(x,y,width,height, options);
		this.width=width;
		this.height=height;
		this.image=loadImage("superhero1.png");
		World.add(world, this.body);

	}
	
	display()
	{
			var angle = this.body.angle;
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}
}
