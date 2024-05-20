import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
            <input 
            placeholder="Aklında ne var Abdullah?"
             className="shareInput"
              />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                     <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Fotoğraf veya Video</span>
                </div>
                <div className="shareOption">
                     <Label  htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Etiketler</span>
                </div>
                <div className="shareOption">
                     <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Konum</span>
                </div>
                <div className="shareOption">
                     <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Emoji</span>
                </div>
            </div>

            <button className="shareButton">Paylaş</button>
        </div>
      </div>
    </div>
  )
}


