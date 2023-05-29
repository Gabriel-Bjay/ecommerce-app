import React, {useState} from 'react'
import Beds from '../Categories/Specifics/Beds/Beds'
import Chairs from '../Categories/Specifics/Chairs/Chairs'
import Sofas from '../Categories/Specifics/Sofas/Sofas'
import Tables from '../Categories/Specifics/Tables/Tables'
import Header from '../layout/Header'

const SavedItems = () => {
    const [savedSofas, setSavedSofas] = useState([]);
    const [savedChairs, setSavedChairs] = useState([]);
    const [savedTables, setSavedTables] = useState([]);
    const [savedBeds, setSavedBeds] = useState([]);
    const [showSavedItems, setShowSavedItems] = useState(false);

    const addToSavedItems = (itemType, item) => {
        if (itemType === 'sofa') {
          setSavedSofas([...savedSofas, item]);
        } else if (itemType === 'chair') {
          setSavedChairs([...savedChairs, item]);
        } else if (itemType === 'table') {
          setSavedTables([...savedTables, item]);
        } else if (itemType === 'bed'){
            setSavedBeds([...savedBeds, item]);
        }
      };
    
      const removeFromSavedItems = (itemType, itemId) => {
        if (itemType === 'sofa') {
          setSavedSofas(savedSofas.filter((sofa) => sofa.id !== itemId));
        } else if (itemType === 'chair') {
          setSavedChairs(savedChairs.filter((chair) => chair.id !== itemId));
        } else if (itemType === 'table') {
          setSavedTables(savedTables.filter((table) => table.id !== itemId));
        } else if (itemType === 'bed'){
            setSavedBeds(savedBeds.filter((bed) => bed.id !== itemId));
        }
      };
    
      const toggleSavedItems = () => {
        setShowSavedItems(!showSavedItems);
      };
  return (
    <div>
      <Header toggleSavedItems={toggleSavedItems} />

        <Sofas addToSavedItems={addToSavedItems} />
        <Chairs addToSavedItems={addToSavedItems} />
        <Tables addToSavedItems={addToSavedItems} />
        <Beds addToSavedItems={addToSavedItems} />

        {showSavedItems && (
        <SavedItems
            savedSofas={savedSofas}
            savedChairs={savedChairs}
            savedTables={savedTables}
            savedBeds={savedBeds}
            removeFromSavedItems={removeFromSavedItems}
            onClose={toggleSavedItems}
        />
        )}
    </div>
  )
}

export default SavedItems
