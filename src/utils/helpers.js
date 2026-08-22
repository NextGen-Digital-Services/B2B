// Central business configuration constants
export const B2B_CONFIG = {
  brandName: 'Westmere Leather Exporters',
  factoryLocation: 'Kolkata Leather Complex, India',
  yearsInBusiness: '18',
  productionCapacity: '15,000+',
  countriesExported: '35+',
  whatsappNumber: '+919876543210',
  whatsappRaw: '919876543210', // Raw numbers only for api.whatsapp.com
  businessEmail: 'export@westmereleather.com',
  certifications: 'ISO 9001:2015, REACH Compliance, LWG Gold Rated, Sedex Certified'
};

// Format currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};

// Generate prefilled WhatsApp URL for a quote request
export const buildWhatsAppRFQUrl = (companyName, country, cartItems) => {
  const itemsText = cartItems
    .map((item) => `- ${item.product_name} (${item.selected_color}) | Qty: ${item.quantity} (MOQ: ${item.moq})`)
    .join('\n');

  const text = `Hello Westmere Export Team,\n\nI would like to request a wholesale price quote for the following items:\n\n${itemsText}\n\nCompany Name: ${companyName}\nCountry: ${country}\n\nPlease get back to us with the FOB Kolkata pricing and shipping timeline.\n\nThank you!`;
  
  return `https://api.whatsapp.com/send?phone=${B2B_CONFIG.whatsappRaw}&text=${encodeURIComponent(text)}`;
};

// Generate prefilled WhatsApp URL for generic contact
export const buildWhatsAppContactUrl = () => {
  const text = `Hello Westmere Team, we are interested in your B2B wholesale catalog and custom manufacturing capabilities. Can you connect us with an export manager?`;
  return `https://api.whatsapp.com/send?phone=${B2B_CONFIG.whatsappRaw}&text=${encodeURIComponent(text)}`;
};
