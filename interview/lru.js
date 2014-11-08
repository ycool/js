// https://oj.leetcode.com/problems/lru-cache/

// npm install -g node-es6
// node-es6 index.js

function Node(k, v) {
	return {
		next: null,
		prev: null,
		key: k,
		value: v
	};
}

function LRUCache(capacity) {
	this.capacity = capacity;
	this.cache = new Map();
	console.log("cache size:", this.cache.size);
	this.head = new Node(-1, -1);
	this.tail = new Node(-1, -1);
	this.head.next = this.tail;
	this.tail.prev = this.head;
	return this;
}

LRUCache.prototype.move_to_tail = function(node) {
	node.prev = this.tail.prev;
	this.tail.prev = node;
	node.prev.next = node;
	node.next = this.tail;
}

LRUCache.prototype.get = function(key) {
	if (!this.cache.has(key)) {
		return -1;
	}

	var node = this.cache.get(key);
	node.prev.next = node.current;
	node.next.prev = node.prev;
	this.move_to_tail(node);

	return node.value;
}

LRUCache.prototype.set = function(key, value) {
	if (this.get(key) != -1) {
		this.cache.get(key).value = value;
		return;
	}
	console.log("cache size:", this.cache.size);
	if (this.cache.size == this.capacity) {
		log("cache delete key:", head.next.key);
		this.cache.delete(head.next.key);
		this.head.next = this.head.next.next;
		this.head.next.prev = this.head;

	}
	var node = new Node(key, value);
	this.cache.set(key, node);
	console.log("cache size:", this.cache.size);
	this.move_to_tail(node); 
}

var cache = new LRUCache(1);
cache.set(2,1);
cache.set(3,1);
console.log("get:", cache.get(2));

console.log("node-es6");

var m = new Map()
m.set(1, 2);
m.set("hello", "abc");
console.log("m size:", m.size);