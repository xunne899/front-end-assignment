function switchImages() {
    const bannerImg = document.getElementById('banner-img');
    const creativeImg = document.getElementById('creative-img');
    const storiesImg = document.getElementById('stories-img');
    const studentsTeachersImg = document.getElementById('students-teachers-img');
    const resourcesSlideImg = document.getElementById('resources-slide-img');
    const resourcesWpsColorNoteImg = document.getElementById('resources-wps-colornote-img');
    const dontMissImg = document.getElementById('dont-miss-img');
    const hereToHelpImg = document.getElementById('here-to-help-img');
    const footerImg = document.getElementById('footer-img');

    const isMobile = window.matchMedia("(max-width: 480px)").matches;

    //mobile  <=480
    if (isMobile) {
        bannerImg.src = 'images/mobile/nav_banner.jpg';
        creativeImg.src = 'images/mobile/get_creative.jpg';
        storiesImg.src = 'images/mobile/stories_singapore.jpg';
        studentsTeachersImg.src = 'images/mobile/student_teachers.jpg';
        resourcesSlideImg.src = 'images/mobile/resources_slide.jpg';
        resourcesWpsColorNoteImg.src = 'images/mobile/resources_wps_colornote.jpg';
        dontMissImg.src = 'images/mobile/dont_miss.jpg';
        hereToHelpImg.src = 'images/mobile/here_to_help.jpg';
        footerImg.src = 'images/mobile/footer.jpg';
    } else {
        //tablet 
        //desktop 
        bannerImg.src = 'images/desktop/banner_content.jpg';
        creativeImg.src = 'images/desktop/get_creative.jpg';
        storiesImg.src = 'images/desktop/stories_singapore.jpg';
        studentsTeachersImg.src = 'images/desktop/students_teachers.jpg';
        resourcesSlideImg.src = 'images/desktop/resources_slide.jpg';
        resourcesWpsColorNoteImg.src = 'images/desktop/resources_wps_colornote.jpg';
        dontMissImg.src = 'images/desktop/dont_miss.jpg';
        hereToHelpImg.src = 'images/desktop/here_to_help.jpg';
        footerImg.src = 'images/desktop/footer.jpg';
    }
}

// function on initial load
switchImages();

// function on window resize using event listener
window.addEventListener('resize', switchImages);

// Use matchMedia to detect changes in screen size
const mediaQuery = window.matchMedia('(max-width: 480px)');

mediaQuery.addEventListener('change', switchImages);
