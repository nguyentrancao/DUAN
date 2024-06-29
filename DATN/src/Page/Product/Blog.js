import React from 'react';

const CustomComponent = ({ name, imageSrc }) => {
  return (
    <div style={styles.container}>
      <img 
        style={styles.image} 
        src={imageSrc} 
        alt={name}
      />
      <div style={styles.text}>
        {name}
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const componentsData = [
    { name: 'Iphone 15 blog', imageSrc: 'https://imagetolink.com/ib/0IyvsBeFtJ.jpg' },
    { name: 'Xiaomi 13T Pro 5G', imageSrc: 'https://imagetolink.com/ib/fOrqsgBgSy.png' },
    { name: 'Samsung Galaxy Z Fold 5G', imageSrc: 'https://imagetolink.com/ib/vYXicE2uxP.jpg' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>Tin Tức Công Nghệ</div>
      <div style={styles.parentContainer}>
        {componentsData.map((data, index) => (
          <CustomComponent key={index} name={data.name} imageSrc={data.imageSrc} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '1348px', // Set the maximum width to 1348px
    margin: '0 auto', // Center the parent container horizontally
    padding: '0 10px', // Add padding to the sides for better spacing
  },
  title: {
    textAlign: 'left', // Align the title to the left
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '50px', // Space between title and the components
    marginTop: '50px',
  },
  parentContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between',
    gap: '10px', // Add gap between components
  },
  container: {
    width: 'calc((100% - 20px) / 3)', // Calculate width to fit three items within 1348px with a 10px gap
    padding: '8px 8px 25px 8px',
    background: 'white',
    borderRadius: '15px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '19px',
    display: 'flex',
  },
  image: {
    width: '100%',
    height: '250px',
    borderRadius: '15px',
    objectFit: 'cover', // Ensure the image covers the area
  },
  text: {
    width: '100%',
    color: 'black',
    fontSize: '15.3px',
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: '27px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center', // Center the text
  },
};

export default ParentComponent;
