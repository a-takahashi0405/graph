/*
 * jQuery FixedTable plugin ver 0.1.0
 * Copyright (c) 2013 Fumio SAGAWA
 * This source file is subject to the MIT license.
 * width: 800, height: 100, fixCols
 */
(function($){
  $.fn.tablefix = function(options) {
    return this.each(function(index){

      var baseTable = $(this);

      var w = options.width;
      var h = options.height;

      var tHeight = baseTable.height();

      var headerHeight = $(baseTable).find("thead").height();
      var footerHeight = $(baseTable).find("tfoot").height();

      var offsetX = 0;
  
      baseTable.find('td,th').each(function(indexX){
        if (indexX == options.fixCols) {
          var cell = $(this);
          offsetX = cell.position().left
          return false;
        }
      });
      
      baseTable.wrap("<div></div>");
      var div = baseTable.parent();
      div.css({position: "relative"});

      // テーブルの分割と初期化
      var crossHeadTable = baseTable.wrap('<div></div>');
      var headTable = baseTable.clone().wrap('<div></div>');
      var dataHeadTable = baseTable.clone().wrap('<div></div>');
      var dataTable = baseTable.clone().wrap('<div></div>');
      var crossFootTable = baseTable.clone().wrap('<div></div>');
      var footTable = baseTable.clone().wrap('<div></div>');
			
      var crossHeadDiv = crossHeadTable.parent().css({
        position: "absolute",
        overflow: "hidden",
        width: offsetX + "px",
        height: headerHeight + "px"
      });

      var headDiv = headTable.parent().css({
        position: "absolute",
        overflow: "hidden",
        width: (w - offsetX) + "px",
        height: headerHeight + "px",
        left: offsetX + "px"
      });

      var dataHeadDiv = dataHeadTable.parent().css({
        position: "absolute",
        overflow: "hidden",
        width: offsetX + "px",
        height: (h - headerHeight - footerHeight) + "px",
        top: headerHeight + "px",
        marginBottom: "-" + headerHeight +"px"
      });

      var dataDiv = dataTable.parent().css({
        position: "absolute",
        overflow: "auto",
        width: (w - offsetX) + "px",
        height: (h - headerHeight - footerHeight) + "px",
        top: headerHeight + "px",
        left: offsetX + "px",
        marginBottom: "-" + headerHeight + "px"
      });

      var crossFootDiv = crossFootTable.parent().css({
        position: "absolute",
        overflow: "hidden",
        width: offsetX + "px",
        height: footerHeight + "px",
        top: (h - footerHeight) + "px"
      });

      var footDiv = footTable.parent().css({
        position: "absolute",
        overflow: "hidden",
        width: (w - offsetX) + "px",
        height: footerHeight + "px",
        top: (h - footerHeight) + "px",
        left: offsetX + "px"
      });


      /* Table の設定 */
      headTable.css({
        marginLeft: '-' + offsetX + 'px'
      });

      dataHeadTable.css({
        marginTop: '-' + headerHeight + 'px',
        marginBottom: '-' + headerHeight + 'px'
      });

      dataTable.css({
        marginLeft: '-' + offsetX + 'px',
        marginTop: '-' + headerHeight + 'px',
        marginBottom: '-' + headerHeight + 'px'
      });

      crossFootTable.css({
        marginTop: '-' + (tHeight - footerHeight) + 'px'
      });

      footTable.css({
        marginLeft: '-' + offsetX + 'px',
        marginTop: '-' + (tHeight - footerHeight) + 'px' /* borderの1 */
      });

      /* delete footer from data area*/
      $(dataHeadTable).find("tfoot").css({display: "none"})
      $(dataTable).find("tfoot").css({display: "none"})

      div.append(crossHeadDiv).append(headDiv).append(dataHeadDiv).append(dataDiv).append(crossFootDiv).append(footDiv);


      // スクロール連動
      dataDiv.scroll(function() {
        headDiv.scrollLeft(dataDiv.scrollLeft());
        dataHeadDiv.scrollTop(dataDiv.scrollTop());
        footDiv.scrollLeft(dataDiv.scrollLeft());
      });

    });
  }
})(jQuery);
