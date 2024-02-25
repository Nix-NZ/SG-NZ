let allActiveDays = new Array();

function generateWeeks(){
	let startOfWeek = parseInt($('select#week_start').val());
		
	moment.updateLocale('en', {
		week : {
			dow : startOfWeek >= 0 && startOfWeek <= 6 ? startOfWeek : 1
		}
	});
	
	let tempStartDate = $('input#start_date').val();
	let tempEndDate = $('input#end_date').val();
	
	
	if(tempStartDate && tempEndDate){
		tempStartDate = parseInt(tempStartDate.toString().replaceAll('-',''));
		tempEndDate = parseInt(tempEndDate.toString().replaceAll('-',''));
		const startDate = Math.min(tempStartDate,tempEndDate);
		const endDate = Math.max(tempStartDate,tempEndDate);
		
		const firstDate = parseInt(moment(startDate.toString()).format('YYYYMMDD'));
		const lastDate = parseInt(moment(endDate.toString()).format('YYYYMMDD'));
		const firstOverallDate = parseInt(moment(startDate.toString()).startOf('week').format('YYYYMMDD'));
		const lastOverallDate = parseInt(moment(endDate.toString()).endOf('week').format('YYYYMMDD'));
		
		
		const firstMonth = parseInt(firstDate.toString().substr(4,2));
		const lastMonth = parseInt(lastDate.toString().substr(4,2));
		const firstYear = parseInt(firstDate.toString().substr(0,4));
		const lastYear = parseInt(lastDate.toString().substr(0,4));
		
		const firstOverallMonth = parseInt(firstOverallDate.toString().substr(4,2));
		const lastOverallMonth = parseInt(lastOverallDate.toString().substr(4,2));
		const firstOverallYear = parseInt(firstOverallDate.toString().substr(0,4));
		const lastOverallYear = parseInt(lastOverallDate.toString().substr(0,4));
				
		let nextPrintedDate = firstOverallDate;
		let weeksHTML = '';
		
		for(var y = firstYear; y <= lastYear; y++){
			let minMonth = y == firstYear ? firstMonth : 1;
			let maxMonth = y == lastYear ? lastMonth : 12;
			for(var m = minMonth; m <= maxMonth; m++){
				
				nextPrintedDate = y.toString() + (m < 10 ? '0' : '') + m.toString() + '01';
				let monthMoment = moment(nextPrintedDate);
				
				let firstDayDOW = parseInt(monthMoment.format('d'));
				
				let lastDayOfMonth = monthMoment.daysInMonth();
				let monthPrinted = false;
				let lastAllDayPrinted = false;
				
				let paddingDays = startOfWeek <= firstDayDOW ? firstDayDOW - startOfWeek : 7 - (startOfWeek - firstDayDOW);
				
				const monthName = monthMoment.format('MMMM YYYY');

				weeksHTML += `<div class="month"><span class="monthname">${monthName}</span><span class="daysofweek">`;
					for(var d = 0; d <= 6; d++){
						const dayLetter = moment('20000102').add(d + startOfWeek,'days').format('dd').substr(0,1);
						weeksHTML += `<span class="dow">${dayLetter}</span>`;
					}
					weeksHTML += `</span>`;
					
					console.log('nextPrintedDate',nextPrintedDate);
															
					let startFromWeek = 1;
					if(y == firstYear && m == minMonth){
						startFromWeek = Math.floor((parseInt(firstDate.toString().substr(6,2)) + paddingDays + 7) / 7); //todo
						if(firstMonth == firstOverallMonth){
							nextPrintedDate = firstOverallDate;
						} else {
							nextPrintedDate = firstDate;
						}
						if(startFromWeek > 1){
							paddingDays = 0;
						}
					}
					
					console.log('nextPrintedDate',nextPrintedDate);
					console.log('firstOverallDate',firstOverallDate);
					console.log('firstDate',firstDate);
					console.log('startFromWeek',startFromWeek);
					
					for(var w = startFromWeek; w <= 6; w++){
						weeksHTML += `<div class="week">`;
						for(var j = 1; j <= 7; j++){
							if((w == startFromWeek && j <= paddingDays) || monthPrinted){
								weeksHTML += `<div class="day"></div>`;
							} else {
								const nextPrintedDateMom = moment(nextPrintedDate.toString());
								const tempDate = nextPrintedDateMom.format('D');
								let isActive = $.inArray(nextPrintedDate,allActiveDays) !== -1 ? ' active' : '';
								weeksHTML += `<div class="day${isActive}" data-date="${nextPrintedDate.toString()}"><span class="date"><span class="text">${tempDate}</span><span class="label"><sup>TH</sup></span></span>
								</div>`;
								if(nextPrintedDate >= lastOverallDate){
									lastAllDayPrinted = true;
								}
								nextPrintedDate = parseInt(nextPrintedDateMom.add(1,'days').format('YYYYMMDD'));
								if(tempDate == lastDayOfMonth){
									monthPrinted = true;	
								}									
							}
						}
						weeksHTML += `</div>`;
						if(monthPrinted || lastAllDayPrinted){
							break;	
						}
						
					}	
				weeksHTML += `</div>`;
			}
		}
		$('div#weeks_holder').html(weeksHTML);

	} else {
		
	
	}
}

function checkPenalties(){
	$('div.week div.explainer').remove();
	$days = $('div#weeks_holder div.day');
	$days.removeClass('sixth seventh').removeAttr('title');
	$activeDays = $days.filter('.active[data-date]');
	let ignoreFrom = 0;
	const activeDates = $activeDays.map(function() {
		return $(this).data('date');
	}).get();
	let sixthConsecutiveDays = new Array();
	let sixthNonConsecutiveDays = new Array();
	let seventhDays = new Array();
	let activeDatesLength = activeDates.length;
	let firstActiveDate = activeDatesLength > 0 ? activeDates[0] : 0;
	
	if(activeDatesLength > 0){
		$('button#clearworkingdays').css('display','block');
	}
	
	$activeDays.each(function(){
		let thisDate = $(this).data('date');
		let weekAgo = parseInt(moment(thisDate.toString()).subtract(7,'days').format('YYYYMMDD'));
		let weekStart = parseInt(moment(thisDate.toString()).subtract(6,'days').format('YYYYMMDD'));
		let prevDate = parseInt(moment(thisDate.toString()).subtract(1,'days').format('YYYYMMDD'));
		let nextDate = parseInt(moment(thisDate.toString()).add(1,'days').format('YYYYMMDD'));
		let dateWords = moment(thisDate.toString()).format('dddd Do MMMM');
		let ignoreFromWords = ignoreFrom > 0 ? moment(ignoreFrom.toString()).format('dddd Do MMMM') : '';
		
		thisDate = parseInt(thisDate);
		
		
		var activeWeekCount = $.grep(activeDates, function(value) {
			return value > weekAgo && value <= thisDate && value > ignoreFrom;
		});
		var activeSixDayCount = $.grep(activeDates, function(value) {
			return value > weekStart && value <= thisDate && value > ignoreFrom;
		});
		
		let explainerSpans = '';
		
		if($.inArray(prevDate,sixthConsecutiveDays) === -1 && $.inArray(prevDate,sixthNonConsecutiveDays) === -1){
			if(activeSixDayCount.length == 6){
				//consecutive
				$(this).addClass('sixth');
				sixthConsecutiveDays.push(thisDate);
				
				//explainerSpans
				explainerSpans += `<span class="sixth">${dateWords} is the 6th consecutive working day out of any 7 calendar days since the `;
				if(ignoreFrom > 0){
					explainerSpans += `count was reset on ${ignoreFromWords}`;
				} else {
					explainerSpans += `start of work`;
				}
				explainerSpans += ` - the count of working days will be reset by the next day regardless of whether it's a working day or not</span>`;
				
				//ignoreFrom
				if($(`div#weeks_holder div.day[data-date="${nextDate}"]:not(.active)`).length > 0){
					ignoreFrom = parseInt(nextDate);
				}
				
			} else if(activeWeekCount.length == 6){
				//non-consecutive
				if($.inArray(weekStart,activeDates) !== -1){
					const weekSecond = parseInt(moment(thisDate.toString()).subtract(5,'days').format('YYYYMMDD'));
					if(weekStart != firstActiveDate && $.inArray(weekAgo,activeDates) === -1 && $.inArray(weekSecond,activeDates) === -1){
						//explainerSpans
						explainerSpans += `<span>Even though ${dateWords} is the 6th non-consecutive working day out of any 7 calendar days since the `;
						if(ignoreFrom > 0){
							explainerSpans += `count was reset on ${ignoreFromWords}`;
						} else {
							explainerSpans += `start of work`;
						}
						explainerSpans += `, it is not considered a 6th day because ${moment(weekStart.toString()).format('dddd Do MMMM')} was immediately preceded by a day off and followed by a day off</span>`;
					} else {
						$(this).addClass('sixth');
						sixthNonConsecutiveDays.push(thisDate);
						
						//explainerSpans
						explainerSpans += `<span class="sixth">${dateWords} is the 6th non-consecutive working day out of any 7 calendar days since the `;
						if(ignoreFrom > 0){
							explainerSpans += `count was reset on ${ignoreFromWords}`;
						} else {
							explainerSpans += `start of work`;
						}
						explainerSpans += ` - the count of working days is reset by this day</span>`;
						
						//ignoreFrom
						ignoreFrom = parseInt(thisDate);
						
					}
				} else {
					$(this).addClass('sixth');	
					sixthNonConsecutiveDays.push(thisDate);
					
					//explainerSpans
					explainerSpans += `<span class="sixth">${dateWords} is the 6th non-consecutive working day out of any 7 calendar days since the `;
					if(ignoreFrom > 0){
						explainerSpans += `count was reset on ${ignoreFromWords}`;
					} else {
						explainerSpans += `start of work`;
					}
					explainerSpans += ` - the count of working days is reset by this day</span>`;
					
					//ignoreFrom
					ignoreFrom = parseInt(thisDate);
				}
			}
		}
		if(activeWeekCount.length == 7 && $.inArray(prevDate,sixthConsecutiveDays) !== -1){
			$(this).addClass('seventh');
			seventhDays.push(thisDate);	
			
			//explainerSpans
			explainerSpans += `<span class="seventh">${dateWords} is the 7th consecutive working day since the `;
			if(ignoreFrom > 0){
				explainerSpans += `count was reset on ${ignoreFromWords}`;
			} else {
				explainerSpans += `start of work`;
			}
			explainerSpans += ` - the count of working days is reset by this day</span>`;
			
			//ignoreFrom
			ignoreFrom = parseInt(thisDate);
		}
		if(explainerSpans != ''){
			let parentWeek = $(this).parents('div.week');
			if(parentWeek.find('div.explainer').length == 0){
				parentWeek.append(`<div class="explainer">${explainerSpans}</div>`);
			} else {
				parentWeek.find('div.explainer').append(explainerSpans);
			}
		}
	});
}

function clearWorkingDays(){
	$('div.week div.explainer').remove();
	$('div#weeks_holder div.day.active').removeClass('active sixth seventh');
	$('button#clearworkingdays').css('display','none');
}

window.addEventListener('load', function () {
		
	generateWeeks();

	$('body').on('click','button#clearworkingdays',function(){
		clearWorkingDays();
	});
	
	$('body').on('click','div.day[data-date]',function(){
		let $this = $(this);
		if($this.hasClass('active')){
			$this.removeClass('active');
			allActiveDays = $.grep(allActiveDays, function(value) {
				return value != $this.data('date');
			});
		} else {
			$this.addClass('active');
			allActiveDays.push($this.data('date'));
		}
		checkPenalties();
	});
	
	$('body').on('input','select,input',function(){
		$.when(generateWeeks()).then(checkPenalties());
	});
	
});	