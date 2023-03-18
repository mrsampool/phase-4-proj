class AddColumnToPunchcards < ActiveRecord::Migration[6.1]
  def change
    add_column :punchcards, :customer_id, :integer
  end
end
