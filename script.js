var dateDiffInDays = function (date1, date2) {
  const timeDifference = date1 - date2;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
	if(date1 === date2){
		return 0;
	}else if(date2-date1){
		return -1;
	}else{
		 return Math.floor(daysDifference);
	}

   
};

// // Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
