class Node{
	constructor(val){
		this.val=val
		this.next=null
	}
}

class Stack{
	constructor(){
		this.first=null
		this.last=null
		this.size=0
	}

	push(val){
		let newNode=new Node(val)
		if(this.size===0){
			this.first=newNode
			this.last=newNode
		} else {
			newNode.next=this.first
			this.first=newNode
		}
		this.size++
	}

	pop(){
		if(this.size===0){
			return null
		}
		let firstNode=this.first
		if(this.first===this.last){
			this.last=null
		}
		this.first=firstNode.next
		this.size--
		return firstNode.val
	}
}
