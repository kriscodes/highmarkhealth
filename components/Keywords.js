import { AiFillTag } from 'react-icons/ai';

const Keywords = () => {

    return (
        <div style={{ display:"flex", margin: "2rem 0" }}>
          <AiFillTag style={{color: "gray"}} />
          <span style={{ padding: "0 4px", color: "darkgray" }}>
            Keywords 
          </span>
          <div>
            <span style={{ color: "lightgray" }}>
              health, public health, healthcare, <br/> hospitals and treatment centers
            </span>
          </div>
        </div>
    );
}

export default Keywords;