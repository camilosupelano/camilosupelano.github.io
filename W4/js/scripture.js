/*
 * Input: A person's name
 * Processing: Create a verse of scripture for that person
 * Output: The scripture
 */

function addname() {

    let name = document.getElementById('nameInputBox').value;
	//
    let scripture = "And it came to pass that I," + name + ", said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.";

    document.getElementById('output2').innerHTML = scripture;

}
