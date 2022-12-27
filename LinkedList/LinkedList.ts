class LinkedNode {
    data: number;
    next: LinkedNode;

    public constructor(d: number) {
        this.data = d;
        this.next = null;
    }
}
export class LinkedList {
    head: LinkedNode ;

    public insertToLinkedList(list: LinkedList, data : number) {
        let new_node = new LinkedNode(data);
        new_node.next = null;

        if (list.head == null){
            list.head = new_node;
        } else {
            let last = list.head;
            while(last.next!=null) {
                last = last.next;
            }
            last.next = new_node;
        }
        return list;
    }
    public printList(list: LinkedList) {
        let currNode = list.head;
        while(currNode.next !=null) {
            console.log(currNode.data+ ' ');
            currNode = currNode.next;
        }
    }
}
