var btn = document.getElementById('pokbtn');
btn.addEventListener('click',proceed);

function proceed(){
    var yes = window.confirm("Are you sure?");
    if(yes){
        window.location.href="https://www.ranker.com/list/complete-list-of-all-pokemon-characters/video-game-info";
    }
}