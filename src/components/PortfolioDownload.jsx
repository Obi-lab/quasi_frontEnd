import React from 'react';
import { saveAs } from 'file-saver';
import PortfolioPPt from '../assets/portfolio.pptx'


const PortfolioDownload = () => {
  

  const downloadPortfolio = () => {
    // Specify the file path to your portfolio in the assets folder
    const filePath = './assets/avatar.png';
  
    // Fetch the file and set the response type to 'blob'
    fetch(filePath)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.blob();
      })
      .then((blob) => {
        // Create a Blob object with the correct content type
        const pptxBlob = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
  
        // Use file-saver to save the Blob as a file
        saveAs(pptxBlob, 'portfolio.pptx');
      })
      .catch((error) => {
        console.error('Error downloading portfolio:', error);
      });
  };
  

  return (
    <div className='py-8'>
        <a href={PortfolioPPt} target="_blank">
            <button className='bg-gradient-to-br from-pink-700 to-blue-700 text-white px-5 py-2 hover:py-3 text-xs my-1 md:text-base rounded-full'
            >
            Download portfolio
            </button>
        </a>
    </div>
  );
};

export default PortfolioDownload;
