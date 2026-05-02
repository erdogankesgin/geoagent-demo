# GeoAgent Demo

🗺️ **AI-Powered Geospatial Analysis with GeoAgent + Leafmap + Omniroute**

## 🎯 Demo

👉 **[Live Demo](https://erdogankesgin.github.io/geoagent-demo/)**

## 📋 About

This demo showcases GeoAgent's capabilities:
- ✅ AI-powered map control with natural language
- ✅ Leafmap integration for interactive mapping
- ✅ Omniroute (Kiro) for LLM backend
- ✅ 25 geospatial tools available

## 🧪 Test Results

The demo map includes:
- 📍 Taksim Meydanı marker (Istanbul)
- 🛰️ Satellite basemap (Esri.WorldImagery)
- 🔍 Zoom level 13
- 3 layers total

## 🛠️ Tech Stack

- **GeoAgent** - Shared AI agent layer for geospatial packages
- **Leafmap** - Interactive mapping library
- **Omniroute** - LLM routing service
- **Model** - `kiro/claude-sonnet-4.5`

## 📚 Resources

- [GeoAgent GitHub](https://github.com/opengeos/GeoAgent)
- [Leafmap Docs](https://leafmap.org)
- [Full Setup Guide](https://github.com/erdogankesgin/geoagent-demo)

## 🚀 Quick Start

```python
import leafmap
from geoagent import for_leafmap

m = leafmap.Map(center=[41.0082, 28.9784], zoom=10)
agent = for_leafmap(m, provider="openai", model="kiro/claude-sonnet-4.5")

# Natural language commands
agent.chat("Add a marker for Taksim Square")
agent.chat("Change basemap to satellite")
agent.chat("Set zoom to 13")
```

## 📝 License

MIT

---

**Created:** 2026-05-02  
**Author:** Erdoğan Kesgin
