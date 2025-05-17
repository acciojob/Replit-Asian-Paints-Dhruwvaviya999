//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('reset_button');

function resetGridColors(){
	for (let i = 1; i <= 9; i++) {
		document.getElementById(i.toString()).style.backgroundColor = "transparent";
	}
}

changeBtn.addEventListener('click', () => {
	const blockId = document.getElementById("block_id").value;
	const color = document.getElementById("colour_id").value;

	resetGridColors();

	const targetedBlock = document.getElementById(blockId);

	if(targetedBlock){
		targetedBlock.style.backgroundColor = color;
	} else {
		alert("Invalid id Please enter id between 1 to 9");
	}
});

resetBtn.addEventListener('click', () => {
	resetGridColors();
});