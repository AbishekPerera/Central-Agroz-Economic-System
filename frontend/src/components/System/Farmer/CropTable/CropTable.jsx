import React, { useState } from "react";
import "../CropTable/croptable.css";

const CropTable = () => {
  const data = [
    {
      district: "Colombo",
      considerations:
        "Paddy (rice), vegetables (tomatoes, brinjal/eggplant, beans), fruits (banana, papaya), and spices (chili, turmeric)",
      recommendedCrops:
        "The Colombo District experiences a tropical monsoon climate with a relatively high annual rainfall. Utilize paddy fields for rice cultivation and ensure proper water management. Vegetables and fruits can be grown in home gardens or small-scale farms.",
    },
    {
      district: "Gampaha",
      considerations:
        "Paddy, vegetables (cabbage, carrot, radish), fruits (mango, pineapple), and spices (coriander, cinnamon)",
      recommendedCrops:
        "The Gampaha District has a similar climate to Colombo, with fertile soil suitable for paddy cultivation. Vegetables and fruits thrive in this region, especially in well-drained soils. Spice crops can also be grown successfully",
    },
    {
      district: "Kandy",
      considerations:
        "Tea, vegetables (cucumber, beans), fruits (orange, avocado), and spices (black pepper, cloves)",
      recommendedCrops:
        "Kandy experiences a cooler climate due to its higher elevation. Tea cultivation is a significant agricultural activity in this district. Vegetables and fruits that prefer cooler temperatures can be grown successfully. Spice crops like black pepper and cloves also flourish in this region",
    },
    {
      district: "Badulla",
      considerations:
        "Tea, vegetables (cabbage, carrot), fruits (apple, peach), and spices (cardamom, ginger)",
      recommendedCrops:
        "Badulla is located in the Uva Province, known for its tea plantations. Tea cultivation is the primary agricultural activity. The region also supports the growth of vegetables, fruits, and spices. Focus on proper soil preparation and moisture management for successful cultivation.",
    },
    {
      district: "Jaffna ",
      considerations:
        "Palmyra palm, vegetables (okra, bitter gourd), fruits (mango, guava), and spices (cumin, fenugreek)",
      recommendedCrops:
        "Jaffna has a distinct climate compared to other districts in Sri Lanka, with less rainfall and higher temperatures. Palmyra palm cultivation is significant in this region. Vegetables, fruits, and spice crops that are tolerant to dry conditions can be grown successfully.",
    },
    {
      district: "Galle",
      considerations:
        " Rice, vegetables (bell pepper, cucumber), fruits (pineapple, jackfruit), and spices (cinnamon, nutmeg)",
      recommendedCrops:
        "Galle experiences a tropical climate with significant rainfall. Paddy fields are suitable for rice cultivation. Vegetables, fruits, and spices can be grown in the region, taking advantage of the fertile soil and favorable weather conditions",
    },
    {
      district: "Matara ",
      considerations:
        "Rice, vegetables (brinjal/eggplant, pumpkin), fruits (banana, mango), and spices (turmeric, cardamom)",
      recommendedCrops:
        "Matara has a similar climate to Galle, making it suitable for paddy cultivation. Vegetable crops like brinjal and pumpkin thrive in this district. Fruits such as banana and mango can be cultivated successfully. Spice crops like turmeric and cardamom can also be grown.",
    },
    {
      district: "Ratnapura ",
      considerations:
        "Rubber, tea, vegetables (cabbage, beans), fruits (pineapple, papaya), and spices (black pepper, ginger)",
      recommendedCrops:
        "Ratnapura is renowned for its rubber and tea plantations. These crops are the major focus in this district. Additionally, vegetables, fruits, and spice crops can be cultivated successfully, taking advantage of the fertile soil and suitable climatic conditions.",
    },
    {
      district: "Kurunegala ",
      considerations:
        "Paddy, vegetables (carrot, beetroot), fruits (mango, guava), and spices (coriander, mustard)",
      recommendedCrops:
        "Kurunegala has diverse agricultural activities, with paddy cultivation being prominent. The district also supports the growth of various vegetables, fruits, and spice crops. Emphasize proper water management for paddy cultivation and select suitable varieties for other crops.",
    },
    {
      district: "Anuradhapura",
      considerations:
        "Paddy, vegetables (tomatoes, onion), fruits (pomegranate, watermelon), and spices (fenugreek, fennel).",
      recommendedCrops:
        "Anuradhapura has a dry zone climate, and paddy cultivation is significant in this district. Vegetables like tomatoes and onions can be grown successfully. Fruits such as pomegranate and watermelon are suitable for this region. Spice crops like fenugreek and fennel can also be cultivated.",
    },
    {
      district: "Polonnaruwa ",
      considerations:
        "Paddy, vegetables (okra, green beans), fruits (papaya, mango), and spices (black pepper, turmeric)",
      recommendedCrops:
        "Polonnaruwa, located in the dry zone, is suitable for paddy cultivation. Additionally, vegetables, fruits, and spice crops can be grown successfully in this district. Emphasize efficient water management and drought-resistant varieties for optimal results.",
    },
    {
      district: "Batticaloa ",
      considerations:
        "Paddy, vegetables (brinjal/eggplant, lady's finger), fruits (banana, passion fruit), and spices (fenugreek, curry leaves)",
      recommendedCrops:
        "Polonnaruwa, located in the dry zone, is suitable for paddy cultivation. Additionally, vegetables, fruits, and spice crops can be grown successfully in this district. Emphasize efficient water management and drought-resistant varieties for optimal results.",
    },
    {
      district: "Batticaloa ",
      considerations:
        "Paddy, vegetables (brinjal/eggplant, lady's finger), fruits (banana, passion fruit), and spices (fenugreek, curry leaves)",
      recommendedCrops:
        "Batticaloa experiences a tropical climate with a significant amount of rainfall. Paddy cultivation is the primary focus in this district. Vegetables, fruits, and spice crops that are resilient to high humidity and occasional flooding can be cultivated successfully.",
    },
    {
      district: "Trincomalee ",
      considerations:
        "Paddy, vegetables (chili, cucumber), fruits (mango, pineapple), and spices (cumin, cardamom).",
      recommendedCrops:
        "Trincomalee has a diverse agricultural landscape. Paddy cultivation is prominent, and the district also supports the growth of various vegetables, fruits, and spice crops. Select suitable varieties and ensure proper water management for successful cultivation.",
    },
    {
      district: "Ampara ",
      considerations:
        "Paddy, vegetables (tomatoes, cabbage), fruits (orange, banana), and spices (coriander, ginger)",
      recommendedCrops:
        "Ampara, located in the eastern region, is suitable for paddy cultivation. The district also supports the growth of vegetables, fruits, and spice crops. Focus on soil fertility management and pest control for optimal crop production.",
    },
    {
      district: "Puttalam ",
      considerations:
        "Rice, vegetables (onion, pumpkin), fruits (mango, papaya), and spices (cinnamon, cloves)",
      recommendedCrops:
        " Puttalam has a diverse agricultural landscape, with rice cultivation being significant. The district also supports the growth of various vegetables, fruits, and spice crops. Pay attention to water management and soil health for successful cultivation.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((record) =>
    record.district.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by District"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <br />
      <table className="croptable">
        <thead>
          <tr>
            <th>District</th>
            <th>Recommended Crops</th>
            <th>Considerations</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((record, index) => (
            <tr key={index} className="croptable-row">
              <td>{record.district}</td>
              <td>{record.considerations}</td>
              <td>{record.recommendedCrops}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropTable;
