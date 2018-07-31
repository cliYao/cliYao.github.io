//Set 
function mySet(array=[]) {
	this.items={}
	array.forEach(val=>this.add(val))
	return this.items
}

mySet.prototype.has=function(val){
	return this.items.hasOwnProperty(val)
}

mySet.prototype.add=function(val){
	if(!this.has(val)){
		this.items[val]=val
	}else{
		return false
	}

}

mySet.prototype.delete=function(val){
	if(this.has(val)){
		delete this.item[val]
	}else{
		false
	}
}

mySet.prototype.clear=function(){
	this.items={}
}

mySet.prototype.keys=function(){
	var nums=[]
	for(var key in this.items){
		nums.push(key)
	}
	return nums
}

mySet.prototype.values=function(){
	var nums=[]
	for(var key in this.items){
		nums.push(this.items[key])
	}
	return nums
}


//Map
function myMap(array=[]){
	this.items={}
	for(i=0;i<array.length;i++){
		this.set(array[i][0],array[i][1])
	}
	return this.items
}

myMap.prototype.has=function(val){
	return this.items.hasOwnProperty(val)
}

myMap.prototype.set=function(key,val){
	this.items[key]=val
}

myMap.prototype.get=function(key){
	for(var enent in this.items){
		if(event===key){
			return this.items[event]
		}
		
	}
	return false
}

myMap.prototype.delete=function(key){
	if(this.has(key)){
		delete this.items[key]
	}else{
		return false
	}
}

myMap.prototype.clear=function(){
	this.items={}
}

myMap.prototype.keys=function(){
	var nums=[]
	for(var key in this.items){
		nums.push(key)
	}
	return nums
}

myMap.prototype.values=function(){
	var nums=[]
	for(var key in this.items){
		nums.push(this.items[key])
	}
	return nums
}

//Array

function myArray(){
	this.items={}
	this.length=-1
}

myArray.prototype.indexOf=function(val){
	if(this.items.hasOwnProperty(val)){
		for(var key in this.items){
			if(this.items[key]===val){
				return key
			}
		} 
	}
	return -1
}

myArray.prototype.push=function(val){
	this.length++
	this.items[this.length]=val
}

myArray.prototype.pop=function(){
	var c=this.items[this.length]
	delete this.items[this.length]
	this.length--
	return c
}

myArray.prototype.shift=function(){
	var key=0
	while(key<this.length){
		this.items[key]=this.items[++key]
	}

	var c=this.items[this.length]
	delete this.items[this.length]
	this.length--
	return c
}

myArray.prototype.unshift=function(val){
	var key=this.length
	while(key>0){
		this.items[key+1]=this.items[key--]
	}
	this.items[0]=val
	this.length++
}

myArray.prototype.slice=function(i=0,j=this.length){
	for(var key in this.items){
		if(key<i||key>=j){
			delete this.items[key]
			this.length--
		}
	}
	this.idx=0
	this.newitems={}
	for(var event in this.items){
		this.newitems[this.idx]=this.items[event]
		this.idx++
	}
	this.items=this.newitems
	return this.items
}

