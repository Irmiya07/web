<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<body style="font-family:Arial;background:#EEEEEE">

<h2>Shopping Cart</h2>
<h3>User: <xsl:value-of select="Cart/User/Name"/></h3>

<xsl:for-each select="Cart/Items/Item">

  <div style="background:teal;color:white;padding:5px;margin-top:8px">
      <b><xsl:value-of select="Product"/></b>
  </div>

  <div style="margin-left:20px">
      Price: ₹<xsl:value-of select="Price"/><br/>
      Quantity: <xsl:value-of select="Quantity"/><br/>
      Total:
      ₹<xsl:value-of select="Price * Quantity"/>
  </div>

</xsl:for-each>

</body>
</html>

</xsl:template>
</xsl:stylesheet>
