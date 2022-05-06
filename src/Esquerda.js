import Story from './Story';
import Post from './Post';

const stories =[{
  src:"assets/img/9gag.svg",
  user:"9gag"
},{
  src:"assets/img/meowed.svg",
  user:"meowed"
},{
  src:"assets/img/barked.svg",
  user:"barked"
},{
  src:"assets/img/nathanwpylestrangeplanet.svg",
  user:"nathanwpylestrangeplanet"
},{
  src:"assets/img/wawawicomics.svg",
  user:"wawawicomics"
},{
  src:"assets/img/respondeai.svg",
  user:"respondeai"
},{
  src:"assets/img/filomoderna.svg",
  user:"filomoderna"
},{
  src:"assets/img/memeriagourmet.svg",
  user:"memeriagourmet"
}
];

const posts =[{
    usersrc:"assets/img/meowed.svg",
    user:"meowed",
    postimg: "assets/img/gato-telefone.svg",
    likeimg: "assets/img/respondeai.svg",
    likeuser: "respondeai",
    likes: "101.523"
  },{
    usersrc:"assets/img/barked.svg",
    user:"barked",
    postimg: "assets/img/dog.svg",
    likeimg: "assets/img/adorable_animals.svg",
    likeuser: "adorable_animals",
    likes:"99.159"
  }
];

export default function Esquerda(){

    return(
            <div class="esquerda">
                <div class="stories">

                    {stories.map((stories) => (<Story src={stories.src} user={stories.user}/>))}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                {posts.map((posts) => (<Post usersrc={posts.usersrc} user={posts.user} postimg={posts.postimg} likeimg={posts.likeimg} likeuser={posts.likeuser} liskes={posts.likes}/>))}
                
            </div>
    );
}