// Importing necessary React and icon components
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'
// Reusable SocialIcon component with hover effect
const SocialIcon = ({icon: Icon}) => (
  <Icon style={{color: '#00df9a', fontSize: '30px', cursor: 'pointer'}} />
)
// Footer component
const Footer = () => {
  // Array defining the content and structure of the footer
  const items = [
    // Social media icons
    {type: 'icon', icon: FaFacebookSquare},
    {type: 'icon', icon: FaInstagram},
    {type: 'icon', icon: FaTwitterSquare},
    {type: 'icon', icon: FaGithubSquare},
    {type: 'icon', icon: FaDribbbleSquare},
    // Footer sections
    {
      type: 'section',
      title: 'Solutions',
      items: ['Analytics', 'Marketing', 'Commerce', 'Insights'],
    },
    {
      type: 'section',
      title: 'Support',
      items: ['Pricing', 'Documentation', 'Guides', 'API Status'],
    },
    {
      type: 'section',
      title: 'Company',
      items: ['About', 'Blog', 'Jobs', 'Press', 'Careers'],
    },
    {type: 'section', title: 'Legal', items: ['Claim', 'Policy', 'Terms']},
  ]
  // JSX structure of the footer
  return (
    <div
      style={{
        backgroundColor: '#000300',
        margin: 'auto',
        padding: '64px 16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        color: '#ccc',
      }}
    >
      {/* Left section with brand and social icons */}
      <div>
        <h1 style={{fontSize: '24px', fontWeight: 'bold', color: 'white'}}>
          RENT FASTER
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '75%',
            margin: '24px 0',
          }}
        >
          {/* Mapping over social icons and rendering the SocialIcon component */}
          {items.map((item, index) =>
            item.type === 'icon' ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null,
          )}
        </div>
      </div>
      {/* Right section with footer content organized in sections */}
      <div
        style={{
          gridColumn: 'span 2',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
        }}
      >
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) =>
          item.type === 'section' ? (
            <div key={index}>
              <h6 style={{fontWeight: 'bold', color: '#fff', fontSize: '20px'}}>
                {item.title}
              </h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    style={{padding: '8px 0', fontSize: '14px'}}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}
export default Footer
