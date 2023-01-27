import styles from "./companyListTile.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import Overlay from "../../overlay";

import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Dialog,
  DialogDescription
} from "@radix-ui/react-dialog";


export default function CompanyListTile({ title, url, date, fav, tags, content }) {
  let displayUrl = url
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("http://", "");

    const Tags = () => {
      return (
        <div className={util.tags + " " + util.flexRow}>
          {tags
            ? tags.map((tag) => (
              <p
                key={tag.name + tag.color}
                className={tag.color + "Tag tag"}
              >
                {tag.name}
              </p>
            ))
            : null}
        </div>
      )
    }

 
  return (
    <div>
    <Overlay url = {url}  tags = {tags} title = {title}/>
    </div>
     

     
      
     
  
  );
}
