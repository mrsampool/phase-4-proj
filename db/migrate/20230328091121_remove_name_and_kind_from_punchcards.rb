class RemoveNameAndKindFromPunchcards < ActiveRecord::Migration[6.1]
  def change
    remove_column :punchcards, :name
    remove_column :punchcards, :kind
  end
end
