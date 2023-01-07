class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    let enNode=new Node(val)
    if(this.size===0){
      this.first=enNode
      this.last=enNode
    } else{
      this.last.next=enNode
      this.last=enNode
    }
    this.size++
  }

  dequeue(){
    if(this.size===0){
      return null
    }
    let deNode=this.first
    if(this.first===this.last){
      this.last=null
    }
    this.first=this.first.next
    this.size--
    return deNode.val
  }
}
