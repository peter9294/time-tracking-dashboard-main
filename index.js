// initial fetch
setupPage('daily', 1);

// click function to change (daily, weekly, monthly) => fetch new info

$('.time-btn').on('click', (e) => {
    setupPage(e.target.innerHTML.toLowerCase())
})

// fetch new info everytime you click .time-btn
function setupPage(time, pic) {
    fetch('./data.json')
        .then(response => response.json()).then(data => data.map(data => {

            // add header title
            let noSpaceTitle = data.title.replace(/\s/g, '')

            $('#header-' + noSpaceTitle).text(data.title)

            //insert picture (first time only)
            if (pic) {

                $('.card-' + noSpaceTitle).prepend("<img src='images/icon-" + noSpaceTitle.toLowerCase() + ".svg' class='img-header'></img>").fadeIn(400)
            }
            // change current time
            if (data.timeframes[time].current < 2) {
                $('#current-' + noSpaceTitle).text(data.timeframes[time].current + 'hr').fadeOut(100).fadeIn(200)
            }
            else {
                $('#current-' + noSpaceTitle).text(data.timeframes[time].current + 'hrs').fadeOut(100).fadeIn(200)
            }

            // change previous time

            if (data.timeframes[time].previous < 2) {
                $('#previous-' + noSpaceTitle).text(data.timeframes[time].previous + 'hr')
            }
            else {
                $('#previous-' + noSpaceTitle).text(data.timeframes[time].previous + 'hrs')
            }


            if (time == 'daily') {
                $('.last-time').text('Yesterday - ')
            }
            else if (time == 'weekly') {
                $('.last-time').text('Last Week - ')
            }
            else if (time == 'monthly') {
                $('.last-time').text('Last Month - ')
            }
            // previous time animation (make it itterate only once)
            if (data.title == 'Work') {
                $('.bottom-desc').fadeOut(200).fadeIn(300)
            }

        }))

}
// อย่าลืมแก้ชม.เดียวให้เป็น hr not hrs

