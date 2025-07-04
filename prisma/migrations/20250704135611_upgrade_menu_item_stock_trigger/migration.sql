-- Drop old trigger and function (optional cleanup)
DROP TRIGGER IF EXISTS update_menu_item_stock_insert ON menu_item_stock_change;
DROP FUNCTION IF EXISTS update_menu_item_stock;

-- New unified trigger function
CREATE OR REPLACE FUNCTION update_menu_item_stock()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE menu_items
    SET stock = stock + NEW.quantity
    WHERE menu_item_id = NEW.menu_item_id;
    RETURN NEW;

  ELSIF TG_OP = 'DELETE' THEN
    UPDATE menu_items
    SET stock = stock - OLD.quantity
    WHERE menu_item_id = OLD.menu_item_id;
    RETURN OLD;
  END IF;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create INSERT trigger
CREATE TRIGGER update_menu_item_stock_insert
AFTER INSERT ON menu_item_stock_change
FOR EACH ROW
EXECUTE FUNCTION update_menu_item_stock();

-- Create DELETE trigger
CREATE TRIGGER update_menu_item_stock_delete
BEFORE DELETE ON menu_item_stock_change
FOR EACH ROW
EXECUTE FUNCTION update_menu_item_stock();
