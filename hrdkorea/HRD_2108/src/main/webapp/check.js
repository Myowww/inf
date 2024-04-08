function addCheck(){
	
	if(frm.id.value.length==0){
		alert("교과목 코드가 입력되지 않았습니다.");
		frm.id.focus();
		return false;
	}
	else if(frm.name.value.length==0){
		alert("과목명이 입력되지 않았습니다.");
		frm.name.focus();
		return false;
	}
	else if(frm.credit.value.length==0){
		alert("학점이 입력되지 않았습니다.");
		frm.credit.focus();
		return false;
	}
	//select 박스에서 선택되는 경우임 
	else if(frm.lecturer.value==0){
		alert("담당강사가 선택되지 않았습니다.");
		frm.lecturer.focus();
		return false;
	}
	//radio 타입은 각각을 배열로 봄 
	else if(frm.week[0].checked==false && 
			frm.week[1].checked==false &&
			frm.week[2].checked==false &&
			frm.week[3].checked==false &&
			frm.week[4].checked==false){//월요일이 체크되지 않았을때 
		alert("요일이 선택되지 않았습니다. ");
		frm.week.focus();
		return false;
	}
	
	else if(frm.start_hour.value.length==0){
		alert("시작시간이 입력되지 않았습니다.");
		frm.start_hour.focus();
		return false;
	}
	else if(frm.end_hour.value.length==0){
		alert("종료시간이 입력되지 않았습니다.");
		frm.end_hour.focus();
		return false;
	}
	
	else{
		alert("교과목 등록이 완료되었습니다!");
		//버튼 정보를 어딘가에 summit해줘야함 
		document.frm.submit();
	}
	return true;
}

function search(){
	window.location="list.jsp";
}