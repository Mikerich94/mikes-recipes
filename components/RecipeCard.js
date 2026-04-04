import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {

    const { title, slug, cookingTime, thumbnail } = recipe.fields
    return (
        <div className="card">
           <div className="featured">
             <Image 
             src={`https:${thumbnail.fields.file.url}`}
             width={thumbnail.fields.file.details.image.width}
             height={thumbnail.fields.file.details.image.height}
             style={{ objectFit: 'cover', maxWidth: '500px', width: '100%', height: 'auto', maxHeight: '375px' }}
  alt="Thumbnail"
             />
            </div> 
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p> Takes approx { cookingTime } mins to make</p>
                </div>
                <div className="actions">
                <Link
  href={'/recipes/' + slug}
  style={{
    color: '#fff',
    background: '#f01b29',
    padding: '16px 24px',
    textDecoration: 'none',
    display: 'inline-block',
    borderRadius: '4px'
  }}
>
  Cook this
</Link>
                </div>
            </div>

        <style jsx>{`
        .card {
          height: 100%;
  display: flex;
  flex-direction: column;
          transform: rotateZ(-1deg);
          max-width: 100%;
        }
          .featured,
.content {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box; 
}
.recipe-list {
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  }

        .content {
        flex:1;
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
          max-width:510px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          min-height:55px;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width:768px) {
        .recipe-list {
          grid-template-columns: 1fr;
    gap: 20px; 
    }
    .content {
    top: -20px; /* smaller offset */
    left: 0;
  }

  .featured img {
    max-width: 100%; 
    height: auto;
  }
    }
   
      `}</style>
        </div>
    )
}
