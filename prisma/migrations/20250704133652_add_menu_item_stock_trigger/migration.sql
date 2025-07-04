-- Trigger function
CREATE OR REPLACE FUNCTION update_menu_item_stock()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE menu_items
  SET stock = stock + NEW.quantity
  WHERE menu_item_id = NEW.menu_item_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger itself
CREATE TRIGGER update_menu_item_stock
AFTER INSERT ON menu_item_stock_change
FOR EACH ROW
EXECUTE FUNCTION update_menu_item_stock();
