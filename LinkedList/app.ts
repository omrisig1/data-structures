import {LinkedList} from "./LinkedList";


let list = new LinkedList();

list = list.insertToLinkedList(list, 1);
list = list.insertToLinkedList(list, 2);
list = list.insertToLinkedList(list, 3);
list = list.insertToLinkedList(list, 4);
list = list.insertToLinkedList(list, 5);
list = list.insertToLinkedList(list, 6);
list = list.insertToLinkedList(list, 7);
list = list.insertToLinkedList(list, 8);

list.printList(list);